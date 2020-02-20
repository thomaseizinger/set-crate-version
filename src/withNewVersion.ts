import { parse, patch } from "toml-patch";

export default function withNewVersion(toml: string, version: string): string {
  const parsed = parse(toml);

  parsed.package.version = version;

  return patch(toml, parsed);
}
