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
    describe('CellRef', function() {
      beforeEach(function() {
        instance = new MinesweeperApi.CellRef();
      });

      it('should create an instance of CellRef', function() {
        // TODO: update the code to test CellRef
        expect(instance).to.be.a(MinesweeperApi.CellRef);
      });

      it('should have the property row (base name: "row")', function() {
        // TODO: update the code to test the property row
        expect(instance).to.have.property('row');
        // expect(instance.row).to.be(expectedValueLiteral);
      });

      it('should have the property column (base name: "column")', function() {
        // TODO: update the code to test the property column
        expect(instance).to.have.property('column');
        // expect(instance.column).to.be(expectedValueLiteral);
      });

    });
  });

}));
