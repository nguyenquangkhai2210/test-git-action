const core = require('@actions/core');

const test = () => {
  
try {
  console.log(`Good by!`);
} catch (error) { 
  core.setFailed(error.message);
}
process.exit(1);
}

test();