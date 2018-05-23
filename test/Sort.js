/**
 * This file is part of the 1st Solidity Gas Golfing Contest.
 *
 * This work is licensed under Creative Commons Attribution ShareAlike 3.0.
 * https://creativecommons.org/licenses/by-sa/3.0/
 */

var Sort = artifacts.require("../contracts/Sort");
var testdata = require('../data/Sort.json');

contract('Sort', function(accounts) {
    var instanceFuture = Sort.new();
    testdata.vectors.forEach(function(v, i) {
        it("Passes test vector " + i, async function() {
            var instance = await instanceFuture;
            var result = await instance.sort(v.input[0], {gas: v.gas});
            assert.deepEqual(result.map(x => x.toNumber()), v.output[0]);
        });
    });

    after(async function() {
        var totalGas = 0;
        var instance = await instanceFuture;
        for(var v of testdata.vectors) {
            totalGas += await instance.sort.estimateGas(v.input[0], {gas: v.gas}) - 21000;
        }
        console.log("Total gas for Sort: " + totalGas);
    });
});
