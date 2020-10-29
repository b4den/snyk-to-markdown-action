const core = require('@actions/core');
const github = require('@actions/github');
const { execSync } = require('child_process');


try {
  // `who-to-greet` input defined in action metadata file
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);

  const fname = core.getInput('file-name') 
  console.log(`The filename is ${fname}`);

  const output = execSync(`ls -l ./`);
  const json_data = require(`${process.env.GITHUB_WORKSPACE}/${fname}`);
  console.log(json_data);

} catch (error) {
  core.setFailed(error.message);
}
