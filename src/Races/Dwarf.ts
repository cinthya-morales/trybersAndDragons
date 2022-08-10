import Race from './Race';

class Dwarf extends Race {
  private static _countInstance = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.addInstance();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private static addInstance() {
    this._countInstance += 1;
  }

  static createdRacesInstances(): number {
    return this._countInstance;
  }
}

export default Dwarf;