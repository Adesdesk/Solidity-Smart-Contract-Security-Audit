# Project Title
Solidity-Smart-Contract-Security-Audit

## Description

Designing a minimal smart contract audit report for the StorageVictim smart contract with the help of Solidity security tips and tricks.

## Getting Started
* Open your favorite terminal and change the current working directory to the location where you want this repository to be cloned.
* Run the command below to clone a copy of this repository to your computer
```
git colne https://github.com/Adesdesk/Solidity-Smart-Contract-Security-Audit.git
```

### Installing

* Change the current working directory to the folder where this cloned project is in your computer
* Run the following command to install required dependencies
```
npm install
```

### Executing program

* Once done, run the following commands in the same order, one on each split side of your terminal, so as to start a local blockchain node and see the code work in various test cases, with outputs logged to the console.

```
npx hardhat node
npx hardhat test test/StorageVictimFixed.js
```

## Help

* Ensure to have Node.js installed on your computer
* Note that the StorageVictim.sol contract may have a number of errors flagged and not compile. This is the exact reason why the 
StorageVictimFixed version was created to take care of the errors and get the code to compile on recent solidity versions.

## Authors

Contributor(s) names and contact info

Name: Adeola David Adelakun
Email: adesdesk@outlook.com


## License

This project is licensed under the MIT License.