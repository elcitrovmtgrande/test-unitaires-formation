import { Blockchain } from '../class/Blockchain';

describe('Blockchain', () => {
  const blockchain = new Blockchain();
  it('should be a Blockchain', () => {
    expect(blockchain).toBeInstanceOf(Blockchain);
  });

  it('should be a Create a block', () => {
    blockchain.mine("CatCoin")
    expect(blockchain).toBeInstanceOf(Blockchain);
  });
  it("should bot be the same ", () => {
    const nbHas = blockchain.blockChain.length
    const previousHash = blockchain.blockChain[nbHas - 2].getHash()
    const newHas = blockchain.blockChain[nbHas - 1].getHash()
    const verif = previousHash === newHas
    expect(verif).toBe(false);
  });


});