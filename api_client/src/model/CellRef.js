/*
 * Minesweeper API
 * A simple Minesweeper API for Deviget code challengue
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
    root.MinesweeperApi.CellRef = factory(root.MinesweeperApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CellRef model module.
   * @module model/CellRef
   * @version v1
   */

  /**
   * Constructs a new <code>CellRef</code>.
   * @alias module:model/CellRef
   * @class
   * @param row {Number} 
   * @param column {Number} 
   */
  var exports = function(row, column) {
    this.row = row;
    this.column = column;
  };

  /**
   * Constructs a <code>CellRef</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CellRef} obj Optional instance to populate.
   * @return {module:model/CellRef} The populated <code>CellRef</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('row'))
        obj.row = ApiClient.convertToType(data['row'], 'Number');
      if (data.hasOwnProperty('column'))
        obj.column = ApiClient.convertToType(data['column'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} row
   */
  exports.prototype.row = undefined;

  /**
   * @member {Number} column
   */
  exports.prototype.column = undefined;

  return exports;

}));
