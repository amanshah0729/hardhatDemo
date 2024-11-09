import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre, { ethers } from "hardhat";

describe("Engagemint", function () {
  let Engagemint, engagemint: any;

  beforeEach(async () => {
    Engagemint = await ethers.getContractFactory("Engagemint");
    engagemint = await Engagemint.deploy();

  

  });



  it("can add new tokens", async () => {
    await engagemint.addToken("Kanye Token");
    const tokens = await engagemint.getToken("Kanye Token");
    expect(tokens.id).to.equal(1);
    expect(tokens.balance).to.equal(0);
  });

  it("can mint more tokens", async () => {
    await engagemint.addToken("Daffy Duck Token");
    await engagemint.addToken("Bugs Bunny Token");

    await engagemint.mintToken("Daffy Duck Token", 1000);
    const tokens = await engagemint.getToken("Daffy Duck Token");
    expect(tokens.balance).to.equal(1000);
  });

  it("can redeem tokens", async () => {
    await engagemint.addToken("Daffy Duck Token");
    await engagemint.addToken("Bugs Bunny Token");
    
    await engagemint.mintToken("Bugs Bunny Token", 1000);
    await engagemint.redeemToken("Bugs Bunny Token", 500);
    const tokens = await engagemint.getToken("Bugs Bunny Token");
    expect(tokens.balance).to.equal(500);
  });

});
