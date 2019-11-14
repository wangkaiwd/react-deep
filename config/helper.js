const path = require('path');
const absPath = dir => path.resolve(__dirname, dir);

const resolveTsconfigPathsToAlias = () => {
  const { paths } = require(absPath('../tsconfig.json')).compilerOptions;
  const alias = {};
  Object.keys(paths).forEach(path => {
    const key = path.replace('/*', '');
    alias[key] = absPath('../src', paths[path][0].replace('/*', ''));
  });
  return alias;
};
module.exports = { absPath, resolveTsconfigPathsToAlias };
