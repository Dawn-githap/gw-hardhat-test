const { expect } = require("chai");
const { ethers, web3 } = require("hardhat");

describe("typeBytes", function () {


    before(async function () {

        const blockInfoContract = await ethers.getContractFactory("typeBytes");
        contract = await blockInfoContract.deploy();
        // console.log("deployTransaction:", contract.deployTransaction.hash);
        // console.log("adress:", contract.address);
        await contract.deployed();

    });


    it("typeBytes:", async () => {

        let bytesmax = await contract.ass();
        console.log("The Bytes max:", bytesmax);
        // expect(bytes3Length).to.equal(32)

    })

});