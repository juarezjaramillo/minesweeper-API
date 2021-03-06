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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MinesweeperApi) {
      root.MinesweeperApi = {};
    }
    root.MinesweeperApi.NewBoard = factory(root.MinesweeperApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NewBoard model module.
   * @module model/NewBoard
   * @version v1
   */

  /**
   * Constructs a new <code>NewBoard</code>.
   * @alias module:model/NewBoard
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>NewBoard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewBoard} obj Optional instance to populate.
   * @return {module:model/NewBoard} The populated <code>NewBoard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('num_rows'))
        obj.numRows = ApiClient.convertToType(data['num_rows'], 'Number');
      if (data.hasOwnProperty('num_columns'))
        obj.numColumns = ApiClient.convertToType(data['num_columns'], 'Number');
      if (data.hasOwnProperty('num_mines'))
        obj.numMines = ApiClient.convertToType(data['num_mines'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} numRows
   */
  exports.prototype.numRows = undefined;

  /**
   * @member {Number} numColumns
   */
  exports.prototype.numColumns = undefined;

  /**
   * @member {Number} numMines
   */
  exports.prototype.numMines = undefined;

  return exports;

}));
