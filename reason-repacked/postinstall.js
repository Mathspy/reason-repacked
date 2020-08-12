#!/usr/bin/env node

var fs = require("fs");

var platform = process.platform;

copyBinary("refmt-" + platform + ".exe", "refmt");

function copyBinary(filename, destFilename) {
  var supported = fs.existsSync(filename);

  if (!supported) {
    console.error("Sadly reason-repacked does not support this platform :(\n");
    console.error(
      "reason-repacked comes prepacked as built binaries to avoid large"
    );
    console.error("dependencies at build-time.");
    console.error("");
    console.error("If you want reason-repacked to support this platform natively,");
    console.error("please open an issue at our repository!");
    console.error("Please specify that you are on");
    console.error("platform:\t" + platform)
    console.error("arch:\t\t" + process.arch);
    process.exit(1);
  }

  if (typeof fs.copyFileSync === "function") {
    fs.copyFileSync(filename, destFilename);
  } else {
    fs.writeFileSync(destFilename, fs.readFileSync(filename));
  }
}
