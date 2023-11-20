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

  public setHealthPoints(healthPoints: number): Character {
    this._healthPoints = healthPoints;
    return this;
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

  public fire(player: Character): boolean {
    const canShoot = this.canShootAt(player);
    const hasAmmos = this.getWeapon().getAmmos() > 0;
    const isAlive = player.getHealthPoints() > 0;

    const hasFired = canShoot && hasAmmos && isAlive;

    if(hasFired) player.setHealthPoints(player.getHealthPoints() - this.getWeapon().getDamages());
    
    return hasFired;
  }
};

export default Character;
