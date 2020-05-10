/* Your code goes here */
function Fighter(obj) {
    const name = obj.name,
    damage = obj.damage,
    strength = obj.strength,
    agility = obj.agility,
    totalHp = obj.hp;
    let hp = obj.hp,
    wins = 0,
    losses = 0;
    this.getName = function () {
      return name;
    }
    Object.defineProperty(this, 'getName', {
      writable: false
    });
    this.getDamage = function () {
      return damage;
    }
    Object.defineProperty(this, 'getDamage', {
      writable: false
    });
    this.getStrength = function () {
      return strength;
    }
    Object.defineProperty(this, 'getStrength', {
      writable: false
    });
    this.getAgility = function () {
      return agility;
    }
    Object.defineProperty(this, 'getAgility', {
      writable: false
    });
    this.getHealth = function () {
      return hp;
    }
    Object.defineProperty(this, 'getHealth', {
      writable: false
    });
  
    this.attack = function (defender) {
      const MAX = 100;
      if (Math.floor(Math.random() * MAX + 1) < MAX - defender.getStrength() + defender.getAgility()) {
        defender.dealDamage(this.getDamage());
        console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
      } else {
        console.log(`${this.getName()} attack missed`);
      }
    }
      Object.defineProperty(this, 'attack', {
      writable: false
    });
  
    this.logCombatHistory = function () {
      return `Name: ${name}, Wins: ${wins}, Losses: ${losses}`;
    }
    Object.defineProperty(this, 'logCombatHistory', {
      writable: false
    });
  
    this.heal = function (healthPoints) {
      if (healthPoints > totalHp) {
        hp = totalHp;
      } else {
        hp += healthPoints;
      }
    }
    Object.defineProperty(this, 'heal', {
      writable: false
    });
  
    this.dealDamage = function (damage) {
      hp -= damage;
      if (hp < 0) {
        hp = 0;
      }
    }
    Object.defineProperty(this, 'dealDamage', {
      writable: false
    });
  
    this.addWin = function () {
      wins++;
    }
    Object.defineProperty(this, 'addWin', {
      writable: false
    });
  
    this.addLoss = function () {
      losses++;
    }
    Object.defineProperty(this, 'addLoss', {
      writable: false
    });
  }
  
  function battle(fighter1, fighter2) {
    if (fighter1.getHealth() === 0) {
      console.log(`${fighter1.getName()} is dead and can't fight`);
      return;
    }
    if (fighter2.getHealth() === 0) {
      console.log(`${fighter2.getName()} is dead and can't fight`);
      return;
    }
    while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
      fighter1.attack(fighter2);
      if (fighter2.getHealth() === 0) {
        fighter1.addWin();
        fighter2.addLoss();
        console.log(`${fighter1.getName()} has won!`);
        return;
      }
      fighter2.attack(fighter1);
      if (fighter1.getHealth() === 0) {
        fighter1.addLoss();
        fighter2.addWin();
        console.log(`${fighter2.getName()} has won!`);
        return;
      }
    }
  }
  
const fighter1 = new Fighter({ name: 'Maximus', damage: 20, hp: 100, strength: 20, agility: 15 });
const fighter2 = new Fighter({ name: 'Commodus', damage: 25, hp: 90, strength: 25, agility: 20 });
  
// battle(fighter1, fighter2);

