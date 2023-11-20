
import { SHA256 } from "crypto-js";

export class Block {
  private _timestamp: number;
  private _data: string;
  private _hash: string;
  private _previousHash: string;

  constructor(previousHash: string, data: any) {
    this._data = data;
    this._timestamp = Date.now();
    this._previousHash = previousHash;
    this._hash = Block.calculateHash(this._timestamp, this._data, this._previousHash);
  }
  public getHash(): string {
    return this._hash
  }
  public setHash(hash: string): Block {
    this._hash = hash;
    return this;
  }
  public getTimestamp(): number {
    return this._timestamp
  }
  public setTimestamp(timestamp: number): Block {
    this._timestamp = timestamp
    return this;
  }
  public getData(): string {
    return this._data;
  }
  public setData(data: any): Block {
    this._data = JSON.stringify(data);
    return this._updateHash();
  }
  public getPreviousHash(): string {
    return this._previousHash
  }
  public setPreviousHash(_previousHash: string): Block {
    this._previousHash = _previousHash;
    return this._updateHash();
  }

  private _updateHash(): Block {
    this._hash = Block.calculateHash(this._timestamp, this._data, this._previousHash);
    return this;
  }

  public static calculateHash(timestamp: number, data: string, previousHash: string): string {
    return SHA256(timestamp + data + previousHash).toString();
  }

}

export default Block;
