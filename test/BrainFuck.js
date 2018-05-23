/**
 * This file is part of the 1st Solidity Gas Golfing Contest.
 *
 * This work is licensed under Creative Commons Attribution ShareAlike 3.0.
 * https://creativecommons.org/licenses/by-sa/3.0/
 */

var BrainFuck = artifacts.require("../contracts/BrainFuck");
var testdata = require('../data/BrainFuck.json');

contract('BrainFuck', function(accounts) {
    var instanceFuture = BrainFuck.new();
    testdata.vectors.forEach(function(v, i) {
        it("Passes test vector " + i, async function() {
            var instance = await instanceFuture;
            var result = await instance.execute(v.input[0], v.input[1], {gas: v.gas});
            assert.equal(result, v.output[0]);
        });
    });

    after(async function() {
        var totalGas = 0;
        var instance = await instanceFuture;
        for(var v of testdata.vectors) {
            totalGas += await instance.execute.estimateGas(v.input[0], v.input[1], {gas: v.gas}) - 21000;
        }
        console.log("Total gas for BrainFuck: " + totalGas);
    });
});
