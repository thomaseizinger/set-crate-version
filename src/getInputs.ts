import { getInput } from "@actions/core/lib/core";

type Inputs = {
  version: string;
  manifest: string;
};

export function getInputs(): Inputs {
  const version = getInput("version", { required: true });
  const manifest = getInput("manifest") || "Cargo.toml";

  return {
    version,
    manifest
  };
}
