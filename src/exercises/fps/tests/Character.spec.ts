import Character from "../Character";
import Weapon from "../Weapon";

describe('Player', () => {
  const weapon = new Weapon('Pistol', 10, 100, 12);
  const char = new Character('nico10@test.com', 100, weapon, { x: 0, y: 0 });

  it('should have a name as a valid email address', () => {
    const emailRegex = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$');
    const isValid = emailRegex.test(char.getName());
    expect(isValid).toBe(true);
  });

  it('should have health points', () => {
    expect(char.getHealthPoints()).toBe(100);
  });

  it('should have a gun', () => {
    expect(char.getWeapon()).toBeInstanceOf(Weapon);
  });

  it('should have a position', () => {
    expect(char.getPosition()).toEqual({ x: 0, y: 0 });
  });

  it('should be able to shoot at another player', () => {
    const enemy = new Character('nico08@test.com', 100, weapon, { x: 10, y: 10 });
    expect(char.canShootAt(enemy)).toBe(true);
  });

  it('should not be able to shoot at another player', () => {
    const enemy = new Character('nico08@test.com', 100, weapon, { x: 300, y: 300 });
    expect(char.canShootAt(enemy)).toBe(false);
  });

  it('should check if player can open fire', () => {
    const enemy = new Character('enemy@test.com', 100, weapon, { x: 10, y: 10 });
    expect(char.fire(enemy)).toBe(true);
  })
});