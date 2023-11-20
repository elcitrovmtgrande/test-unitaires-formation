import Blockchain from '../class/Blockchain';
import Block from '../class/Block';

describe('Blockchain', () => {
  it('should be a Blockchain', () => {
    const blockchain = new Blockchain();
    expect(blockchain).toBeInstanceOf(Blockchain);
  });

  it('should have a chain of blocks', () => {
    const blockchain = new Blockchain();
    expect(blockchain.chain).toBeDefined();
  });

  it('should have a genesis block bro', () => {
    const blockchain = new Blockchain();
    // [0] because it's an array bro
    // to be "genesis block bro" because it's the first block of the chain
    expect(blockchain.chain[0].data).toBe('genesis block bro');
  });

  it('should have a latest block', () => {
    const blockchain = new Blockchain();
    expect(blockchain.getLatestBlock()).toBeDefined();
  });

  it('should be able to add a block', () => {
    const blockchain = new Blockchain();
    const block = new Block('test');
    blockchain.addBlock(block);
    expect(blockchain.chain.length).toBe(2);
  });

  it('should be able to get previous hash', () => {
    const blockchain = new Blockchain();
    const block = new Block('test');
    blockchain.addBlock(block);
    expect(blockchain.getPreviousHash()).toBe(blockchain.chain[0].hash);
  });

});