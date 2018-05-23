/**
 * This file is part of the 1st Solidity Gas Golfing Contest.
 *
 * This work is licensed under Creative Commons Attribution ShareAlike 3.0.
 * https://creativecommons.org/licenses/by-sa/3.0/
 */

var IndexOf = artifacts.require("../contracts/IndexOf");
var testdata = require('../data/IndexOf.json');

contract('IndexOf', function(accounts) {
    var instanceFuture = IndexOf.new();
    testdata.vectors.forEach(function(v, i) {
        it("Passes test vector " + i, async function() {
            var instance = await instanceFuture;
            var result = await instance.indexOf(v.input[0], v.input[1], {gas: v.gas});
            assert.equal(result, v.output[0]);
        });
    });

    after(async function() {
        var totalGas = 0;
        var instance = await instanceFuture;
        for(var v of testdata.vectors) {
            totalGas += await instance.indexOf.estimateGas(v.input[0], v.input[1], {gas: v.gas}) - 21000;
        }
        console.log("Total gas for IndexOf: " + totalGas);
    });
});
