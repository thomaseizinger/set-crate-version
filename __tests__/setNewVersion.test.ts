import withNewVersion from "../src/withNewVersion";
import { readFile, writeFile } from "fs";
import { promisify } from "util";

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

it.each([
  ["simple", "1.0.0"],
  ["real_world_cnd", "0.6.0"]
])("should update the version of %s to %s", async function(fixture, version) {
  const toml = await readFileAsync(`__tests__/fixtures/${fixture}/Cargo.toml`, {
    encoding: "utf-8"
  });

  const actual = await withNewVersion(toml, version);
  await writeFileAsync(
    `__tests__/fixtures/${fixture}/Cargo.actual.toml`,
    actual,
    { encoding: "utf-8" }
  );

  const expected = await readFileAsync(
    `__tests__/fixtures/${fixture}/Cargo.expected.toml`,
    { encoding: "utf-8" }
  );

  expect(actual).toEqual(expected);
});
