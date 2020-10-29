# Snyk to Markdown Github Action

Takes a `snyk.json` output file and transforms it into human readable markdown. The primary use case for this action is for use within a CI environment where you may want to _ship_ your Snyk findings as a PR comment, or to a Slack channel somewhere.

## Inputs

### `input-file`

**Required** The location of your input file. Default `./snyk.json`.


