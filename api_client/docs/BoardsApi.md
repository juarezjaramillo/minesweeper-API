# MinesweeperApi.BoardsApi

All URIs are relative to *http://www.example.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**boards**](BoardsApi.md#boards) | **GET** /boards | List all boards
[**boardsCreate**](BoardsApi.md#boardsCreate) | **POST** /boards | Create and start a new board
[**boardsDelete**](BoardsApi.md#boardsDelete) | **DELETE** /boards/{id} | Delete a board
[**boardsFlagCell**](BoardsApi.md#boardsFlagCell) | **POST** /boards/{id}/flag | Flag a cell
[**boardsGet**](BoardsApi.md#boardsGet) | **GET** /boards/{id} | Get details of a board
[**boardsPause**](BoardsApi.md#boardsPause) | **POST** /boards/{id}/pause | Pause a board
[**boardsResume**](BoardsApi.md#boardsResume) | **POST** /boards/{id}/resume | Resume a board
[**boardsRevealCell**](BoardsApi.md#boardsRevealCell) | **POST** /boards/{id}/reveal | Reveal a cell
[**boardsUnflagCell**](BoardsApi.md#boardsUnflagCell) | **DELETE** /boards/{id}/flag | Unflag a cell


<a name="boards"></a>
# **boards**
> [Board] boards()

List all boards

Gets a list of all the available boards

### Example
```javascript
var MinesweeperApi = require('minesweeper_api');

var apiInstance = new MinesweeperApi.BoardsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.boards(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Board]**](Board.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="boardsCreate"></a>
# **boardsCreate**
> Board boardsCreate(data)

Create and start a new board

Create and start a new board with the specified number or rows, columns and mines

### Example
```javascript
var MinesweeperApi = require('minesweeper_api');

var apiInstance = new MinesweeperApi.BoardsApi();

var data = new MinesweeperApi.NewBoard(); // NewBoard | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.boardsCreate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**NewBoard**](NewBoard.md)|  | 

### Return type

[**Board**](Board.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="boardsDelete"></a>
# **boardsDelete**
> boardsDelete(id)

Delete a board

Delete a single board

### Example
```javascript
var MinesweeperApi = require('minesweeper_api');

var apiInstance = new MinesweeperApi.BoardsApi();

var id = 56; // Number | A unique integer value identifying this board.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.boardsDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this board. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="boardsFlagCell"></a>
# **boardsFlagCell**
> boardsFlagCell(id, data)

Flag a cell

Flag a particular cell

### Example
```javascript
var MinesweeperApi = require('minesweeper_api');

var apiInstance = new MinesweeperApi.BoardsApi();

var id = 56; // Number | A unique integer value identifying this board.

var data = new MinesweeperApi.CellRef(); // CellRef | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.boardsFlagCell(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this board. | 
 **data** | [**CellRef**](CellRef.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="boardsGet"></a>
# **boardsGet**
> Board boardsGet(id)

Get details of a board

Get the details of a single board

### Example
```javascript
var MinesweeperApi = require('minesweeper_api');

var apiInstance = new MinesweeperApi.BoardsApi();

var id = 56; // Number | A unique integer value identifying this board.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.boardsGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this board. | 

### Return type

[**Board**](Board.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="boardsPause"></a>
# **boardsPause**
> Board boardsPause(id)

Pause a board

Pauses a board. While the board is paused, the elapsed time of the board does not increase

### Example
```javascript
var MinesweeperApi = require('minesweeper_api');

var apiInstance = new MinesweeperApi.BoardsApi();

var id = 56; // Number | A unique integer value identifying this board.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.boardsPause(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this board. | 

### Return type

[**Board**](Board.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="boardsResume"></a>
# **boardsResume**
> Board boardsResume(id)

Resume a board

Resumes a board

### Example
```javascript
var MinesweeperApi = require('minesweeper_api');

var apiInstance = new MinesweeperApi.BoardsApi();

var id = 56; // Number | A unique integer value identifying this board.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.boardsResume(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this board. | 

### Return type

[**Board**](Board.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="boardsRevealCell"></a>
# **boardsRevealCell**
> Board boardsRevealCell(id, data)

Reveal a cell

Reveals a particular cell

### Example
```javascript
var MinesweeperApi = require('minesweeper_api');

var apiInstance = new MinesweeperApi.BoardsApi();

var id = 56; // Number | A unique integer value identifying this board.

var data = new MinesweeperApi.CellRef(); // CellRef | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.boardsRevealCell(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this board. | 
 **data** | [**CellRef**](CellRef.md)|  | 

### Return type

[**Board**](Board.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="boardsUnflagCell"></a>
# **boardsUnflagCell**
> boardsUnflagCell(id, data)

Unflag a cell

Removes the flag a particular cell

### Example
```javascript
var MinesweeperApi = require('minesweeper_api');

var apiInstance = new MinesweeperApi.BoardsApi();

var id = 56; // Number | A unique integer value identifying this board.

var data = new MinesweeperApi.CellRef(); // CellRef | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.boardsUnflagCell(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this board. | 
 **data** | [**CellRef**](CellRef.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

