# minesweeper_api

MinesweeperApi - JavaScript client for minesweeper_api
A simple Minesweeper API for the Deviget code challenge
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: v1
- Package version: v1
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install minesweeper_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your minesweeper_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('minesweeper_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/minesweeper_api
then install it via:

```shell
    npm install YOUR_USERNAME/minesweeper_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var MinesweeperApi = require('minesweeper_api');

var api = new MinesweeperApi.BoardsApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.boards(callback);

```

## Documentation for API Endpoints

All URIs are relative to *api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*MinesweeperApi.BoardsApi* | [**boards**](docs/BoardsApi.md#boards) | **GET** /boards | List all boards
*MinesweeperApi.BoardsApi* | [**boardsCreate**](docs/BoardsApi.md#boardsCreate) | **POST** /boards | Create and start a new board
*MinesweeperApi.BoardsApi* | [**boardsDelete**](docs/BoardsApi.md#boardsDelete) | **DELETE** /boards/{id} | Delete a board
*MinesweeperApi.BoardsApi* | [**boardsFlagCell**](docs/BoardsApi.md#boardsFlagCell) | **POST** /boards/{id}/flag | Flag a cell
*MinesweeperApi.BoardsApi* | [**boardsGet**](docs/BoardsApi.md#boardsGet) | **GET** /boards/{id} | Get details of a board
*MinesweeperApi.BoardsApi* | [**boardsPause**](docs/BoardsApi.md#boardsPause) | **POST** /boards/{id}/pause | Pause a board
*MinesweeperApi.BoardsApi* | [**boardsResume**](docs/BoardsApi.md#boardsResume) | **POST** /boards/{id}/resume | Resume a board
*MinesweeperApi.BoardsApi* | [**boardsRevealCell**](docs/BoardsApi.md#boardsRevealCell) | **POST** /boards/{id}/reveal | Reveal a cell
*MinesweeperApi.BoardsApi* | [**boardsUnflagCell**](docs/BoardsApi.md#boardsUnflagCell) | **DELETE** /boards/{id}/flag | Unflag a cell


## Documentation for Models

 - [MinesweeperApi.Board](docs/Board.md)
 - [MinesweeperApi.Cell](docs/Cell.md)
 - [MinesweeperApi.CellRef](docs/CellRef.md)
 - [MinesweeperApi.NewBoard](docs/NewBoard.md)


## Documentation for Authorization

 All endpoints do not require authorization.
