import { SHA256 } from "crypto-js";

export class Block {
  private _timestamp: number;
  private _hash: string;
  private _previousHash: string;
  private _data: any;

  constructor(data: string, previousHash: string) {
    this._timestamp = Date.now();
    this._previousHash = previousHash;
    this._data = data;
    this._hash = Block.hash(this._timestamp, this._previousHash, this._data);
  }

  public getTimestamp(): number {
    return this._timestamp;
  }

  public getHash(): string {
    return this._hash;
  }

  public getPreviousHash(): string {
    return this._previousHash;
  }

  public getData(): string {
    return this._data;
  }

  public setData(data: string): Block {
    this._data = JSON.stringify(data);
    return this._updateHash();
  }

  private _updateHash(): Block {
    this._hash = Block.hash(this._timestamp, this._previousHash, this._data);
    return this;
  }

  static hash(timestamp: number, previousHash: string, data: any): string {
    return SHA256(timestamp + previousHash + JSON.stringify(data)).toString();
  }
}

export default Block;
