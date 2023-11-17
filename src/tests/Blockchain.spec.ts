import { Blockchain } from '../class/Blockchain';

describe('Blockchain', () => {
  it('should be a Blockchain', () => {
    const blockchain = new Blockchain();
    expect(blockchain).toBeInstanceOf(Blockchain);
  });
});