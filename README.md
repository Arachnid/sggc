# 1st Solidity Gas Golfing Contest

The Solidity Gas Golfing Contest is a competition for Solidity coders to produce the most gas-efficient code they can for a series of straightforward challenges. The 1st SGGC will run from 25 May to 25 June 2018.

For more details, and entry instructions, see the competition site at [g.solidity.cc](http://g.solidity.cc/).

This repository contains boilerplate for the contracts for each of the five challenges, along with test vectors and runners to test your implementation against before submitting it.

Note that constructor code will not be run, and state will not persist between tests.

## Installation

Clone this repository and install its dependencies:

```
git clone https://github.com/arachnid/sggc.git
npm install
```

## Usage

Implement one or more of the contracts in the `contracts` directory. Run the corresponding test with `truffle test`; for instance, if you implemented Sort, run:

```
truffle test test/Sort.js
```

If all the tests pass, you can submit your entry at [g.solidity.cc](http://g.solidity.cc/) and see how it stacks up against the competition!
