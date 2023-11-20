import Block from './Block';
export class Blockchain {

  constructor() {
    this.blockChain = [new Block('0x000000000000000000000', 'Je suis le premier bloc!')];
  }
  blockChain: any[];
  public mine(data: any): any {
    const nbHas = this.blockChain.length
    const previousHash = this.blockChain[nbHas - 1].getHash()
    const genesisBlock = new Block(previousHash, data)
    genesisBlock.setHash(Block.calculateHash(genesisBlock.getTimestamp(), genesisBlock.getData(), genesisBlock.getPreviousHash()))
    this.blockChain.push(genesisBlock)
    return this.blockChain
  }
}


export default Blockchain;
