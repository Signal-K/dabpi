const CLI = require('clui');
const Configstore = require('configstore');
const Octokit = require('@octokit/rest');
const Spinner = CLI.Spinner;
const { createBasicAuth } = require("@octokit/auth-basic");

const inquirer = require('./inquirer');
const pkg = require('../package.json');

const conf = new Configstore(pkg.name)

// Check if we've got an access token (i.e. we're logged in)
let octokit;

module.exports = {
    getInstance: () => {
        return octokit;
    },

    // Get the stored token and return the token
    getStoredGithubToken: () => { 
        return conf.get('github.token');
    },

    // If we don't have a stored token, prompt the user for their credentials
    getPersonalAccessToken: async () => {
        const credentials = await inquirer.askGithubCredentials();
        const status = new Spinner('Authenticating you, please wait...');

        status.start();

        const auth = createBasicAuth({
            username: credentials.username,
            password: credentials.password,
            async on2Fa() {
                //pass
            },
            token: {
                scopes: ['user', 'public_repo', 'repo', 'repo:status'], // What variables (scopes) can be accessed from Github's oauth
                note: 'ginit, the command-line tool for initalizing Git repos'
            }
        });

        try {
            const res = await auth();

            // If authentication is successful & a token is present in `res`, set it in `configstore` and return it
            if(res.token) {
                conf.set('github.token', res.token);
                return res.token;
            } else {
                throw new Error("Github token was not found in the response")
            }
        } finally {
            status.stop();
        }
    },
};