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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MinesweeperApi);
  }
}(this, function(expect, MinesweeperApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('NewBoard', function() {
      beforeEach(function() {
        instance = new MinesweeperApi.NewBoard();
      });

      it('should create an instance of NewBoard', function() {
        // TODO: update the code to test NewBoard
        expect(instance).to.be.a(MinesweeperApi.NewBoard);
      });

      it('should have the property numRows (base name: "num_rows")', function() {
        // TODO: update the code to test the property numRows
        expect(instance).to.have.property('numRows');
        // expect(instance.numRows).to.be(expectedValueLiteral);
      });

      it('should have the property numColumns (base name: "num_columns")', function() {
        // TODO: update the code to test the property numColumns
        expect(instance).to.have.property('numColumns');
        // expect(instance.numColumns).to.be(expectedValueLiteral);
      });

      it('should have the property numMines (base name: "num_mines")', function() {
        // TODO: update the code to test the property numMines
        expect(instance).to.have.property('numMines');
        // expect(instance.numMines).to.be(expectedValueLiteral);
      });

    });
  });

}));
