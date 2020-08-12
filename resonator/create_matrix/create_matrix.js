const fs = require("fs").promises;
const path = require("path");
const os = require("os");

function identifier({ repo, ref }) {
  return `${repo}/${ref}`;
}

function createMatrix({ packages }) {
  return {
    package: packages.map(identifier),
    include: packages.map(({ repo, ref }) => ({
      package: identifier({ repo, ref }),
      repo,
      ref,
    })),
  };
}

function prepareCommand(string) {
  return `::set-output name=matrix::${string}${os.EOL}`;
}

if (require.main === module) {
  fs.readFile(path.resolve(__dirname, "../packages.json"), "utf-8")
    .then(JSON.parse)
    .then(createMatrix)
    .then(JSON.stringify)
    .then(prepareCommand)
    .then(process.stdout.write.bind(process.stdout))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}

module.exports = createMatrix;
