import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private static _countInstance = 0;
  private _type: EnergyType;

  constructor(name: string) {
    super(name);
    this._type = 'stamina';
    Warrior.addInstance();
  }

  private static addInstance() {
    this._countInstance += 1;
  }

  static createdArchetypeInstances(): number {
    return this._countInstance;
  }

  get energyType(): EnergyType {
    return this._type;
  }
}

export default Warrior;