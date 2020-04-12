'use strict';
//Task 1, 2

class Weapon {
	constructor({name,attack,durability,range}) {
		this.name = name;
		this.attack = attack;
		this.durability = durability;
		this.range = range;
		this.initialDurability = durability;
	}
	takeDamage(damage){
		this.durability -= damage;
		if ((this.durability <= 0) || (this.durability == undefined) || (isNaN(this.durability))) {
			return this.durability = 0;
		} else 
		return this.durability;

	}
	getDamage(){
		if (this.durability === Infinity) 
			return this.attack;
		if ((this.durability <= 0) || (isNaN(this.durability)) || (this.durability == undefined) || (this.initialDurability == undefined) || (this.initialDurability <= 0))
			return this.attack = 0;
		if ((this.durability) >= (0.3 * this.initialDurability)) 
			return this.attack;
			else
				return (this.attack / 2);
	};

	isBroken()  {
		return (this.durability <= 0);
	}
};

const oldSword = new Weapon({
  name: 'Старый меч',
  attack: 20,
  durability: 10,
  range: 1,
});

class Arm extends Weapon {
	constructor(name,attack,durability,range){
		super({name,attack,durability,range});
		this.name = 'Рука';
		this.attack = 1;
		this.durability = Infinity;
		this.range = 1;
		this.initialDurability = Infinity;
	};
};

class Bow extends Weapon {
	constructor(name,attack,durability,range){
		super({name,attack,durability,range});
		this.name = 'Лук';
		this.attack = 10;
		this.durability = 200;
		this.range = 3;
		this.initialDurability = 200;
	}
}

class LongBow extends Bow {
	constructor(name,attack,durability,range){
		super(name,attack,durability,range);
		this.name = 'Длинный лук';
		this.attack = 15;
		this.range = 4;
	}
}

class Sword extends Weapon {
	constructor(name,attack,durability,range){
		super({name,attack,durability,range});
		this.name = 'Меч';
		this.attack = 25;
		this.durability = 500;
		this.range = 1;
		this.initialDurability = 500;
	}
}

class Axe extends Sword {
	constructor(name,attack,durability,range){
		super(name,attack,durability,range);
		this.name = 'Секира';
		this.attack = 27;
		this.durability = 800;
		this.initialDurability = 800;
	}
}

class Knife extends Weapon {
	constructor(name,attack,durability,range){
		super({name,attack,durability,range});
		this.name = 'Нож';
		this.attack = 5;
		this.durability = 300;
		this.range = 1;
		this.initialDurability = 300;
	}
}

class Staff extends Weapon {
	constructor(name,attack,durability,range){
		super({name,attack,durability,range});
		this.name = 'Посох';
		this.attack = 8;
		this.durability = 300;
		this.range = 2;
		this.initialDurability = 300;
	}
} 

class StormStaff extends Staff {
	constructor(name,attack,durability,range){
		super(name,attack,durability,range);
		this.name = 'Посох Бури';
		this.attack = 10;
		this.range = 3;
	}
}



const arm = new Arm();
const bow = new Bow();
const sword = new Sword();
const knife = new Knife();
const staff = new Staff();
const longBow = new LongBow();
const axe = new Axe();	
const stormStaff = new StormStaff();	




//Task 3
class StudentLog {
	constructor(name) {
		this.name = name;
	}

	getName(){
		return this.name;
	}

	addGrade(grade, subject){
    if (!this.hasOwnProperty(`${subject}`)) {
      this[subject] = [];    
    }
		if ((grade === 1) || (grade === 2) ||(grade === 3) || (grade === 4) || (grade === 5)) {
      this[subject].push(grade);
		  return this[subject].length;
    } else {
			return `Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`;
		}
	}

	getAverageBySubject(subject){
		if (!this.hasOwnProperty(`${subject}`)) {
			return 0;
		}
		let sum = 0;
		for ( let i=0; i < this[subject].length; i++) {
			sum += this[subject][i];
		}
		return sum / this[subject].length;
	}

	getTotalAverage() {
    let sum = 0;
    let number = 0;
		for (let prop in this) {
		let value = this[prop];
      if (Array.isArray(value)){
      console.log(value);
      for ( let i=0; i < value.length; i++) {
			sum += value[i];
      number ++;
      }
		}
    }
    if (sum === 0) 
    return 0;
   
    return (sum / number);
	}
}
//const log = new StudentLog('Олег Никифоров');

//log.addGrade(2, 'algebra');
//log.addGrade(4, 'algebra');
//console.log(log);
//log.addGrade(5, 'geometry');
//log.addGrade(4, 'geometry');
//console.log(log);

//console.log(log.getAverageBySubject('geometry')); // 4.5
//console.log(log.getAverageBySubject('algebra')); // 3
//console.log(log.getAverageBySubject('math')); // 0

//console.log(log.getTotalAverage()); // 3,75
