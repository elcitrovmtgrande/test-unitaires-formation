import { Block } from "../class/Block";

describe("Block", () => {
  const initialHash = "genesis hash";
  const block = new Block("plop", initialHash);

  it("should be a Block", () => {
    expect(block).toBeInstanceOf(Block);
  });

  it("should have a timestamp property", () => {
    expect(typeof block.getTimestamp()).toBe("number");
  });

  it("should have a hash property", () => {
    expect(typeof block.getHash()).toBe("string");
  });

  it("should have a previousHash property", () => {
    expect(typeof block.getPreviousHash()).toBe("string");
  });

  it("should have a data property", () => {
    expect(typeof block.getData()).toBe("string");
  });

  it("sould generate a hash", () => {
    const blockHash = block.getHash();
    const shouldBe = Block.hash(block.getTimestamp(), initialHash, "plop");

    expect(typeof blockHash).toBe("string");
    expect(blockHash).toBe(shouldBe);
  });
});
