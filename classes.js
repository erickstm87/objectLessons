"use strict";
class Monepok{
  constructor(name,type,battleStats){
    this.name = name;
    this.type = type;
    this.battleStats = battleStats;
  }
  takeDamage(points){
    return(this.battleStats['maxHp'] - this.battleStats['attack']);
  }
  isFainted(hp){
    if(hp === 0)
      return true;
    else
      return false;
  }
};
class Shield{
  constructor(strength){
    this.strength = strength;
  }
  applyDefense(attackPoints){
    console.log(attackPoints *= this.strength);
  }
  withString(){
    console.log('with Shield');
  }
};
class Weapon{
  constructor(name,strength){
    this.name = name;
    this.strength = strength;
  }
  applyAttack(attackPoints){
    return(this.strength * attackPoints);
  }
  withString(){
    return this.name;
  }
};
var wilbur = new Monepok('wilbur','earth',{maxHp: 100, attack: 40});
console.log(wilbur.takeDamage());
var shield1 = new Shield(.75);
shield1.applyDefense(50);
shield1.withString();
console.log(wilbur.battleStats);
var cheetah = new Weapon('ultimate',35);
cheetah.withString();
