#!/usr/bin/env node
//Shebang creation

//Importing Requirements from package.json.
const program = require("commander");
const clipboardy = require("clipboardy");
const chalk = require("chalk");

//Setting log as Console log
const log = console.log;

//Importing functions
const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");

//Creating package help section
program.version("1.0.0").description("Simple Random Password Generator.");

program
  .option("-l, --length <number>", "length of password", 8)
  .option("-s, --save", "Save password to passwords.txt")
  .option("-nn, --no-numbers", "removes number")
  .option("-ns, --no-symbols", "removes symbol")
  .parse();

//Creating names as package options(opts)
const { length, save, numbers, symbols, charactors } = program.opts();
//log(numbers, symbols, charactors);

//Get Generated Password
const generatedPassword = createPassword(length, numbers, symbols, charactors);

//Save to file
if (save) {
  savePassword(generatedPassword);
}

//Copy to clipboard
clipboardy.writeSync(generatedPassword);

//Output generated and Copied password
log(chalk.blue("Generated Password: ") + chalk.yellow.bold(generatedPassword));

log(chalk.red("Password Copy to Clipboard"));
