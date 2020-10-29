const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);

  const fname = core.getInput('file-name') 
  console.log(`The filename is ${fname}`);
  const json_data = require(`./${input}`);

} catch (error) {
  core.setFailed(error.message);
}
