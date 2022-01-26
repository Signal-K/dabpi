#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const github = require('./lib/github');

const files = require('./lib/files');

clear();

console.log(
    chalk.yellow(
        figlet.textSync('Ginit', { horizontalLayout: 'full' })
    )
);

if (files.directoryExists('.git')) {
    console.log(chalk.red('Already a Git repository!'));
    process.exit();
}

// Authentication
//const inquirer = require('./lib/inquirer');
const run = async () => {
    let token = github.getStoredGithubToken();
    if(!token) {
        token = await github.getPersonalAccessToken();    
    }
    console.log(token);
    const credentials = await inquirer.askGithubCredentials();
};

run();