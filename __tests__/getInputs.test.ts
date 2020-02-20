import { morph } from "mock-env";
import { getInputs } from "../src/getInputs";

it("should require version", function() {
  expect(() => morph(getInputs, {})).toThrow();
});

it('should default manifest path to "Cargo.toml"', function() {
  const inputs = morph(getInputs, {
    INPUT_VERSION: "1.2.15"
  });

  expect(inputs).toHaveProperty("manifest", "Cargo.toml");
});

it("should honor given manifest path", function() {
  const inputs = morph(getInputs, {
    INPUT_VERSION: "1.2.15",
    INPUT_MANIFEST: "foo/bar/Cargo.toml"
  });

  expect(inputs).toHaveProperty("manifest", "foo/bar/Cargo.toml");
});
