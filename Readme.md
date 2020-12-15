# Node React chat app

Server is written in typescript using [nestjs](https://nestjs.com/) framework, client side uses react (latest using hooks) also in typescript. Client side is PWA ready, scripts are used to create build of service worker with single command.

## Folder structure

letschat-api - contains node app, which use sqlite (created while running the server)
letschat-ui - contains react app for the chat app

## Installation

Use the package manager [yarn](https://yarnpkg.com/) to install dependencies for both server and client

```bash
yarn install
```

run this command in both folder to install the required dependencies

## Usage

Run server in one terminal inside letschat-api folder
```bash
yarn start:dev
```
Run client in another terminal inside letschat-ui folder
```bash
yarn start
```
api and ui both will auto-reload if any changes are made in files

## Build

Server build in server folder (letschat-api)
```bash
yarn build
```
Client/React build in client folder (letschat-ui)
```bash
yarn build
```

the config for db and ui are in respective config folders.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)