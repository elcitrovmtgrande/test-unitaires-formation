import Block from "./Block";
export class Blockchain {
  private _chain: Array<Block>;
  private blockGenesis = new Block("genesis data", "genesis hash");

  constructor() {
    this._chain = [this.blockGenesis];
  }

  public addBlock(data: string): void {
    const lastBlockHash = this.getLastBlock();
    const newBlock: Block = new Block(data, lastBlockHash);
    this._chain.push(newBlock);
  }

  private getLastBlock(): string {
    return this._chain[this._chain.length - 1].getHash();
  }

  public getChain(): Array<Block> {
    return this._chain;
  }
}

export default Blockchain;
