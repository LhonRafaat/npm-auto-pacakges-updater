# Auto Package Updater

Auto Package Updater is a command-line tool that automates the process of updating npm packages within the package.json file. It updates both dependencies and dev dependencies to their latest versions.

# Usage

To run the Auto Package Updater, use the following command:

`npx npm-auto-packages-updater path-to-package.json [excludeDev]`

You can optionally pass the excludeDev arguement to skip updating the dev dependencies.

# Installation

Auto Package Updater can be used directly using npx, without the need for a separate installation step.

# Example

Update packages in a specific directory:

`npx npm-auto-packages-updater ./path-to-package.json`

Exclude dev dependencies:

`npx npm-auto-packages-updater ./path-to-package.json excludeDev`

# Notes

The tool only updates the version numbers in the package.json file; it does not install or uninstall any packages.

It is recommended to review the changes made by the tool and test your application thoroughly after updating packages.

[github link](https://github.com/LhonRafaat/npm-auto-pacakges-updater)

# Author

Lhon Rafaat Mohammed
