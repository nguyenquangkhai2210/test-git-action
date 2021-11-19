const core = require('@actions/core');

try {
  console.log(`Good by!`);
} catch (error) { 
  core.setFailed(error.message);
}