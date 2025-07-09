import yaml from "https://esm.sh/js-yaml";

type CellInput = {
  type: "markdown" | "code";
  content: string;
  metadata?: Record<string, unknown>;
};

type TemplateInput = {
  metadata?: Record<string, unknown>;
  cells: CellInput[];
};

async function loadTemplate(path: string): Promise<TemplateInput> {
  const raw = await Deno.readTextFile(path);
  if (path.endsWith(".yaml") || path.endsWith(".yml")) {
    return yaml.load(raw) as TemplateInput;
  } else if (path.endsWith(".json")) {
    return JSON.parse(raw);
  } else {
    throw new Error("Unsupported template format. Use .json or .yaml/.yml");
  }
}

async function createNotebookFromTemplate(templatePath: string, outputFile: string) {
  const template = await loadTemplate(templatePath);

  const notebook = {
    nbformat: 4,
    nbformat_minor: 2,
    metadata: template.metadata ?? {},
    cells: template.cells.map(({ type, content, metadata }) => ({
      cell_type: type,
      metadata: metadata ?? {},
      source: content.split("\n").map((line) => line + "\n"),
      execution_count: type === "code" ? null : undefined,
      outputs: type === "code" ? [] : undefined,
    })),
  };

  const json = JSON.stringify(notebook, null, 2);
  await Deno.writeTextFile(outputFile, json);
  console.log(`✅ Notebook created: ${outputFile}`);
}

if (import.meta.main) {
  const template = Deno.args[0];
  const output = Deno.args[1] ?? "Notebook.ipynb";

  if (!template) {
    console.error("Usage: deno run --allow-read --allow-write make_notebook.ts <template.(json|yaml)> [output.ipynb]");
    Deno.exit(1);
  }

  try {
    await createNotebookFromTemplate(template, output);
  } catch (e) {
    console.error("❌ Error:", e.message);
    Deno.exit(1);
  }
}
