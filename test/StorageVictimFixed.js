const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('StorageVictimFixed', function () {
  let storageVictimFixed;
  let owner;
  let user1;
  let user2;

  beforeEach(async function () {
    const StorageVictimFixed = await ethers.getContractFactory('StorageVictimFixed');
    [owner, user1, user2] = await ethers.getSigners();

    storageVictimFixed = await StorageVictimFixed.deploy();
    await storageVictimFixed.deployed();
  });

  it('should store and retrieve user data correctly', async function () {
    const amount = 100;
    const amount2 = 200;

    // Connect with user1 signer
    const storageVictimFixedUser1 = storageVictimFixed.connect(user1);

    // Call the store function to store user1's data
    await storageVictimFixedUser1.store(amount);

    // Call the getStore function to retrieve the stored data
    const [storedUser1, storedAmount1] = await storageVictimFixedUser1.getStore();

    console.log(`User1 - Stored User: ${storedUser1}`);
    console.log(`User1 - Stored Amount: ${storedAmount1}`);
    console.log("\n");

    // Assert that the retrieved data matches the stored data
    expect(storedUser1).to.equal(user1.address);
    expect(storedAmount1).to.equal(amount);

    // Connect with user2 signer
    const storageVictimFixedUser2 = storageVictimFixed.connect(user2);

    // Call the store function to store user2's data
    await storageVictimFixedUser2.store(amount2);

    // Call the getStore function to retrieve the stored data
    const [storedUser2, storedAmount2] = await storageVictimFixedUser2.getStore();

    console.log(`User2 - Stored User: ${storedUser2}`);
    console.log(`User2 - Stored Amount: ${storedAmount2}`);

    // Assert that the retrieved data matches the stored data
    expect(storedUser2).to.equal(user2.address);
    expect(storedAmount2).to.equal(amount2);
  });

  it('should return the correct owner', async function () {
    const contractOwner = await storageVictimFixed.getOwner();

    console.log(`Contract Owner: ${contractOwner}`);

    // Assert that the owner is the same as the owner signer's address
    expect(contractOwner).to.equal(owner.address);
  });
});
