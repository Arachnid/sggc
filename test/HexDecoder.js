/**
 * This file is part of the 1st Solidity Gas Golfing Contest.
 *
 * This work is licensed under Creative Commons Attribution ShareAlike 3.0.
 * https://creativecommons.org/licenses/by-sa/3.0/
 */

var HexDecoder = artifacts.require("../contracts/HexDecoder");
var testdata = require('../data/HexDecoder.json');

contract('HexDecoder', function(accounts) {
    var instanceFuture = HexDecoder.new();
    testdata.vectors.forEach(function(v, i) {
        it("Passes test vector " + i, async function() {
            var instance = await instanceFuture;
            var result = await instance.decode(v.input[0], {gas: v.gas});
            assert.deepEqual(result, v.output[0]);
        });
    });

    after(async function() {
        var totalGas = 0;
        var instance = await instanceFuture;
        for(var v of testdata.vectors) {
            totalGas += await instance.decode.estimateGas(v.input[0], {gas: v.gas}) - 21000;
        }
        console.log("Total gas for HexDecoder: " + totalGas);
    });
});
