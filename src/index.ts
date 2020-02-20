import { setFailed, setOutput } from "@actions/core";
import { getInputs } from "./getInputs";
import { readFile, writeFile } from "fs";
import { promisify } from "util";
import withNewVersion from "./withNewVersion";

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

async function run(): Promise<void> {
  try {
    const { version, manifest } = getInputs();

    const toml = await readFileAsync(manifest, { encoding: "utf-8" });
    const updated = withNewVersion(toml, version);
    await writeFileAsync(manifest, updated, { encoding: "utf-8" });
  } catch (error) {
    setFailed(error.message);
  }
}

run();
