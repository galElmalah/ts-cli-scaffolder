const { exec, execSync, spawn } = require('child_process');

const uuidPostfix = Math.random().toFixed(6);

module.exports = {
  parametersOptions: {
    owner: { question: 'Enter your Name:', validation: (v) => v.length > 1 ? true : 'Name must be longer than 1 character.' }
  },
  functions: {
    createdAt: () => `Created at ${new Date().toLocaleDateString()}`,
    moduleName: (ctx) => `cool-group-${ctx.parametersValues.owner.toLowerCase().replace(/ /g, '')}`
  },
  templatesOptions: {
    cli: {
      hooks: {
        postTemplateGeneration: (ctx) => {
          ctx.logger.warning(`Installing dependencies...\n`);
          execSync('npm i', { cwd: ctx.targetRoot, stdio: "inherit" })
        }
      }
    }
  }
}