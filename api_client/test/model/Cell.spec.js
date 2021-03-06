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
    describe('Cell', function() {
      beforeEach(function() {
        instance = new MinesweeperApi.Cell();
      });

      it('should create an instance of Cell', function() {
        // TODO: update the code to test Cell
        expect(instance).to.be.a(MinesweeperApi.Cell);
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

      it('should have the property mine (base name: "mine")', function() {
        // TODO: update the code to test the property mine
        expect(instance).to.have.property('mine');
        // expect(instance.mine).to.be(expectedValueLiteral);
      });

      it('should have the property value (base name: "value")', function() {
        // TODO: update the code to test the property value
        expect(instance).to.have.property('value');
        // expect(instance.value).to.be(expectedValueLiteral);
      });

      it('should have the property revealed (base name: "revealed")', function() {
        // TODO: update the code to test the property revealed
        expect(instance).to.have.property('revealed');
        // expect(instance.revealed).to.be(expectedValueLiteral);
      });

      it('should have the property flagged (base name: "flagged")', function() {
        // TODO: update the code to test the property flagged
        expect(instance).to.have.property('flagged');
        // expect(instance.flagged).to.be(expectedValueLiteral);
      });

    });
  });

}));
