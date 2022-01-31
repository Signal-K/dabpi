# Signal-K/Dabpi
## Contract branch
This branch will be containing the base structure around interacting with a smart contract (starting on Rinkeby test net) using our own REST API
After finishing this I'll move it back to the `main` or `unity-lootlocker` branches so we can then continue integration with the rest of the API. We'll then also integrate this with the game components & contracts we'll store on the blockchain directly, as well as with the Panoptes API.

# Dependencies
Install the required node packages by entering the command `npm install`, or install the packages manually:

```bash
npm install chalk clear clui figlet inquirer minimist configstore @octokit/rest @octokit/auth-basic lodash simple-git touch
```

## Packages
* Chalk (Node)
* Clear (Node)
* CLUI (Node)
* Figlit (Node)
* Inquirer (Node)
* Minimist (Node)
* Configstore (Node)
* @octokit/rest (Node)
* @octokit/auth-basic (Node)
* Lodash (Node)
* Timple-git (Node)
* Touch (Node)
* Streamlit (Python)

### Node-default packages
* [Fs](https://nodejs.dev/learn/the-nodejs-fs-module) -> Interacting with the file system

## APIs tracked (by default)
* Unity API
* Phaser API
* LootLocker API
* Github API
* Discord API
* Metamask/Etherscan ++

# To Do
Add this to glitch.com (and then Keybase through submodule)
Update `package.json` with our custom configurations

# External Tools
We're using [Curlconverter](https://curlconverter.com/#python) to get information from the [Lootlocker API](https://ref.lootlocker.io/game-api/#list-files);