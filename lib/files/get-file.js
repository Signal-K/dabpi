const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

var fetch = require('node-fetch');

getAllFiles: () => {
    fetch('https://api.lootlocker.io/game/player/files', {
    headers: {
        'x-session-token': '5995a0ce1afe87ac9dd49c509bd2fcae6f7d79ab',
        'LL-Version': '2021-03-01'
    }
    });
}

getSpecificFile: () => {
    fetch('https://api.lootlocker.io/game/player/files/{file_id}', {
    headers: {
        'x-session-token': '5995a0ce1afe87ac9dd49c509bd2fcae6f7d79ab',
        'LL-Version': '2021-03-01'
    }
    });
}

module.exports = {
    askForFile: () => {
        const questions = [{
            name: 'file_id',
            type: 'input',
            message: 'Enter the file_id of the file you want to res',
            validate: function(value) {
                if (value.length) {
                    return true;
                } else {
                    return 'Please enter the file_id of the file you want to res.';
                }
            },
        }];
        return inquirer.prompt(questions);
        getAllFiles();
    }
}