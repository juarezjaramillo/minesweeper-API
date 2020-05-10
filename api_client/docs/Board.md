# MinesweeperApi.Board

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**numRows** | **Number** | The number of rows in the board | [optional] 
**numColumns** | **Number** | The number of columns in the board | [optional] 
**numMines** | **Number** | The number of mines in the board | [optional] 
**status** | **Number** | The status of the board. Started, Paused or Finished | [optional] 
**result** | **Number** | The result of the board. Win, Lose, Timeout | [optional] 
**created** | **Date** | The date the board was created | [optional] 
**lastStarted** | **Date** | The date the board was last started or resumed | [optional] 
**cells** | [**[Cell]**](Cell.md) |  | [optional] 
**elapsed** | **Number** | The time the board has been active for playing | [optional] 


