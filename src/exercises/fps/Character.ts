import Weapon from "./Weapon";

interface IPosition {
  x: number;
  y: number;
}

export class Character {
  private _name: string;
  private _healthPoints: number;
  private _weapon: Weapon;
  private _position: IPosition;

  constructor(name: string, healthPoints: number, weapon: Weapon, position: IPosition) {
    this._name = name;
    this._healthPoints = healthPoints;
    this._weapon = weapon;
    this._position = position;
  }

  public getName(): string {
    return this._name;
  }

  public getHealthPoints(): number {
    return this._healthPoints;
  }

  public getWeapon(): Weapon {
    return this._weapon;
  }

  public getPosition(): IPosition {
    return this._position;
  }

  public canShootAt(player: Character): boolean {
    const distance = Math.sqrt(Math.pow(this._position.x - player.getPosition().x, 2) + Math.pow(this._position.y - player.getPosition().y, 2));
    const range = this.getWeapon().getRange();
    return distance < range;
  }
};

export default Character;
