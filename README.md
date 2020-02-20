# Set crate version

A GitHub action for setting the version of a Rust crate.

## Usage

```yaml
name: "..."
on: ...

jobs:
  bump-version:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    
    - name: Bump crate version
      uses: thomaseizinger/set-crate-version@master
      with:
        version: 1.0.0
```
