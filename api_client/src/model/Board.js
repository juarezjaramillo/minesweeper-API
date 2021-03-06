/*
 * Minesweeper API
 * A simple Minesweeper API for the Deviget code challenge
 *
 * OpenAPI spec version: v1
 * Contact: juarezjaramillo@deviget.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.13
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Cell'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Cell'));
  } else {
    // Browser globals (root is window)
    if (!root.MinesweeperApi) {
      root.MinesweeperApi = {};
    }
    root.MinesweeperApi.Board = factory(root.MinesweeperApi.ApiClient, root.MinesweeperApi.Cell);
  }
}(this, function(ApiClient, Cell) {
  'use strict';

  /**
   * The Board model module.
   * @module model/Board
   * @version v1
   */

  /**
   * Constructs a new <code>Board</code>.
   * @alias module:model/Board
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Board</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Board} obj Optional instance to populate.
   * @return {module:model/Board} The populated <code>Board</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('num_rows'))
        obj.numRows = ApiClient.convertToType(data['num_rows'], 'Number');
      if (data.hasOwnProperty('num_columns'))
        obj.numColumns = ApiClient.convertToType(data['num_columns'], 'Number');
      if (data.hasOwnProperty('num_mines'))
        obj.numMines = ApiClient.convertToType(data['num_mines'], 'Number');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'Number');
      if (data.hasOwnProperty('result'))
        obj.result = ApiClient.convertToType(data['result'], 'Number');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Date');
      if (data.hasOwnProperty('last_started'))
        obj.lastStarted = ApiClient.convertToType(data['last_started'], 'Date');
      if (data.hasOwnProperty('cells'))
        obj.cells = ApiClient.convertToType(data['cells'], [Cell]);
      if (data.hasOwnProperty('elapsed'))
        obj.elapsed = ApiClient.convertToType(data['elapsed'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * The number of rows in the board
   * @member {Number} numRows
   */
  exports.prototype.numRows = undefined;

  /**
   * The number of columns in the board
   * @member {Number} numColumns
   */
  exports.prototype.numColumns = undefined;

  /**
   * The number of mines in the board
   * @member {Number} numMines
   */
  exports.prototype.numMines = undefined;

  /**
   * The status of the board. Started, Paused or Finished
   * @member {Number} status
   */
  exports.prototype.status = undefined;

  /**
   * The result of the board. Win, Lose, Timeout
   * @member {Number} result
   */
  exports.prototype.result = undefined;

  /**
   * The date the board was created
   * @member {Date} created
   */
  exports.prototype.created = undefined;

  /**
   * The date the board was last started or resumed
   * @member {Date} lastStarted
   */
  exports.prototype.lastStarted = undefined;

  /**
   * @member {Array.<module:model/Cell>} cells
   */
  exports.prototype.cells = undefined;

  /**
   * The time the board has been active for playing
   * @member {Number} elapsed
   */
  exports.prototype.elapsed = undefined;

  return exports;

}));
