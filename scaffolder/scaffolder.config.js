const uuidPostfix = Math.random().toFixed(3)
module.exports = {
  parametersOptions: {
    owner: { question: 'Enter your Name:', validation: (v) => v.length > 1 ? true : 'Name must be longer than 1 character.' }
  },
  functions: {
    createdAt: () => `Created at ${new Date().toLocaleDateString()}`,
    moduleName: () => `coolGroup-${uuidPostfix}`
  }
}