export class Weapon {
  private _name: string;
  private _damages: number;
  private _range: number;
  private _ammos: number;

  constructor(name: string, damages: number, range: number, ammos: number) {
    this._name = name;
    this._damages = damages;
    this._range = range;
    this._ammos = ammos;
  }

  public getName(): string {
    return this._name;
  }

  public getDamages(): number {
    return this._damages;
  }

  public getRange(): number {
    return this._range;
  }

  public getAmmos(): number {
    return this._ammos;
  }
}

export default Weapon;
