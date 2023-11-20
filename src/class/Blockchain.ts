import Block from './Block';

export default class Blockchain { 

    public chain: Block[];

    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    private createGenesisBlock() {
        const genesisBlock = new Block('genesis block bro');
        genesisBlock.generateHash(genesisBlock.data);
        return genesisBlock;
    }

    public getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    public addBlock(newBlock: Block) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.generateHash(newBlock.data);
        this.chain.push(newBlock);
    }

    private getPreviousBlock() {
        return this.chain[this.chain.length - 2];
    }

    public getPreviousHash() {
        return this.getPreviousBlock().hash;
    }

}
