import { parse as parseYml } from "https://deno.land/std@0.224.0/yaml/mod.ts";
import { parseArgs } from "https://deno.land/std@0.224.0/cli/parse_args.ts";

interface NotebookCell {
  type: "code" | "markdown";
  content: string;
  tags?: string[];
}

interface NotebookMetadata {
  title: string;
  filename: string;
}

interface NotebookEntry {
  metadata: NotebookMetadata;
  cells: NotebookCell[];
}

interface YamlStructure {
  notebooks: NotebookEntry[];
}

function createNotebookJson(entry: NotebookEntry) {
  return {
    nbformat: 4,
    nbformat_minor: 5,
    metadata: {
      title: entry.metadata.title,
      kernelspec: {
        name: "deno",
        display_name: "Deno"
      },
      language_info: {
        name: "typescript",
        version: "1.0"
      }
    },
    cells: entry.cells.map(cell => ({
      cell_type: cell.type,
      metadata: cell.tags ? { tags: cell.tags } : {},
      source: cell.content.split("\n").map(line => line + "\n"),
      ...(cell.type === "code" ? { execution_count: null, outputs: [] } : {})
    }))
  };
}

async function main() {
  // Parse CLI args
  const args = parseArgs(Deno.args, {
    boolean: ["override"],
    alias: {
      o: "override",
    },
  });

  const override = args?.override ?? false;
  const yamlText = await Deno.readTextFile("./bin/notebooks.yaml");
  const parsed = parseYml(yamlText) as YamlStructure;

  for (const entry of parsed.notebooks) {
    const { filename, title } = entry.metadata;
    const qualifiedName = `./problems/${filename.split('.ipynb')[0]}.ipynb`
    
    try {
      // Check if file already exists
      await Deno.stat(qualifiedName);

      if (override) throw new Deno.errors.NotFound();
      console.log(`⏭ Skipping "${title}" — file "${filename}" already exists.`);
      continue;
    } catch (err) {
      if (err instanceof Deno.errors.NotFound) {
        // File does not exist, proceed
        const notebookJson = createNotebookJson(entry);
        await Deno.writeTextFile(qualifiedName, JSON.stringify(notebookJson, null, 2));
        console.log(`✅ Created: ${filename}`);
      } else {
        throw err; // Unknown error
      }
    }
  }
}

main();
