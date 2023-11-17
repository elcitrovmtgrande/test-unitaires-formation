import { Block } from '../class/Block';

describe('Block', () => {
  it('should be a Block', () => {
    const block = new Block();
    expect(block).toBeInstanceOf(Block);
  });
});