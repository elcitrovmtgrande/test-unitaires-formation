import { SHA256 } from 'crypto-js';
import Blockchain from './Blockchain';

export default class Block {

    public hash: string;
    public createdAt: Date;
    public previousHash: string;
    public data: string;

    constructor(data: string) {
        this.hash = '';
        this.createdAt = new Date();
        this.previousHash = 'previousHash';
        this.data = data;
    }

    generateHash(data: string) {
        const hash = SHA256(data.concat(this.previousHash)).toString();
        return this.hash = hash;
    }

 }

