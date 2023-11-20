import { Blockchain } from "../class/Blockchain";

describe("Blockchain", () => {
  const blockchain = new Blockchain();

  it("should be a Blockchain", () => {
    expect(blockchain).toBeInstanceOf(Blockchain);
  });

  it("should create a block", () => {
    blockchain.addBlock("plop");
    expect(blockchain.getChain().length).toBeGreaterThan(1);
  });

  it("should be an array of blocks", () => {
    expect(blockchain.getChain()).toBeInstanceOf(Array);
  });
});
