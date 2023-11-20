import { Block } from '../class/Block';

const block = new Block("firstBlock", "CatCoin");
describe('Block', () => {
  it('should be an instance of Block', () => {
    expect(block).toBeInstanceOf(Block);
  });
  it('should correctly set and get the hash', () => {
    const hash = block.getHash();
    const thash = typeof hash;
    expect(thash).toBe('string');
  });
  it('should correctly set and get the timestamp', () => {
    const timestamp = block.getTimestamp();
    const tTimestamp = typeof timestamp;
    expect(tTimestamp).toBe('number');
  });

  it('should correctly set and get the data', () => {
    const newData = block.getData();
    const tNewData = typeof newData;
    expect(tNewData).toBe('string');
  });
});
