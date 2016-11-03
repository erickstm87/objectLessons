"use strict";
class Monepok{
  constructor(name,type,battleStats){
    this.name = name;
    this.type = type;
    this.battleStats = battleStats;
  }
};
class Shield{
  constructor(strength){
    this.strength = strength;
  }
};
class Weapon{
  constructor(name,strength){
    this.name = name;
    this.strength = strength;
  }
};
var wilbur = new Monepok('wilbur','earth',{maxHp: 100, attack: 'ferocious'});
console.log(wilbur.battleStats);
