const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Rfc Token", function () {
    let Rfc;
    let rfc;
    let owner;
    let addr1;
    let addr2;
  
    beforeEach(async function () {
      // Get the ContractFactory and deploy
      Rfc = await ethers.getContractFactory("Rfc");
      [owner, addr1, addr2] = await ethers.getSigners();
      rfc = await Rfc.deploy();
    });
  
    it("Deployment should assign the total supply of tokens to the deployer", async function () {
      const ownerBalance = await rfc.balanceOf(owner.address);
    //   console.log(ownerBalance)
      expect(await rfc.totalSupply()).to.equal(ownerBalance);
    });
  
    it("Should transfer tokens between accounts", async function () {
      await rfc.transfer(addr1.address, 100);
      const addr1Balance = await rfc.balanceOf(addr1.address);
      
      expect(addr1Balance).to.equal(100);
    //   const ownerBalance = await rfc.balanceOf(owner.address);
      
    //   console.log(ownerBalance)

      await rfc.connect(addr1).transfer(addr2.address, 50);
      const addr2Balance = await rfc.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(50);
    });
  
    // ... More test cases for other functionalities (e.g., allowance, permit)
  });




  