#!/usr/bin/env node

import fs from "fs";
import { exec } from "child_process";
import process from "node:process";

const pkgJsonPath = process.argv[2] ?? "./package.json";

async function updatePackages(pkgs) {
  console.log("running npm i " + pkgs);

  exec("npm i " + pkgs + " --force", (error, stdout, stderr) => {
    if (error) {
      console.error(
        `error updating packages ${pkgs.replaceAll(
          "@latest",
          ","
        )} to their latest versions`
      );
      console.error(stderr);
    } else {
      console.log(
        `updated packages ${pkgs.replaceAll(
          "@latest",
          ""
        )} to their latest versions`
      );
      console.log(stdout);
    }
  });
}

const file = fs.readFileSync(pkgJsonPath)?.toString();

const parsedFile = JSON.parse(file);
const packages = [];

for (const pkg in parsedFile["dependencies"]) {
  packages.push(pkg + "@latest");
}

for (const pkg in parsedFile["devDependencies"]) packages.push(pkg + "@latest");

updatePackages(packages.toString().replaceAll(",", " "));
