#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const inquirer = require('inquirer');
program
    .command('generate [type]')
    .description('Generate a new app')
    .action((type) => {
        console.log(chalk.green('Generating ' + type + ' app...'));
    });
program.parse(process.argv);
