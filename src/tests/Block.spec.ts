import Block from '../class/Block';

const data = 'test';

describe('Block', () => {

  // it should be a Block
  it('should be a Block', () => {
    const block = new Block(data);
    expect(block).toBeInstanceOf(Block);
  });

  // it should have a creation date
  it('should have a creation date', () => {
    const block = new Block(data);
    expect(block.createdAt).toBeDefined();
  });

  // it should have a hash
  it('should have an hash', () => {
    const block = new Block(data);
    block.generateHash(data);
    expect(block.hash).toBeDefined();
  });

  // it should have a previous hash
  it('should have a previous hash', () => {
    const block = new Block(data);
    expect(block.previousHash).toBeDefined();
  });

  // it should have data
  it('should have data', () => {
    const block = new Block(data);
    expect(block.data).toBeDefined();
  });

});