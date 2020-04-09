'use strict';
//Task 1, 2

class Weapon {
	constructor(name,attack,durability,range) {
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
		if ((this.initialDurability) >= (0.3 * this.durability)) 
			return this.attack;
			else
				return (this.attack / 2);
	};

	isBroken()  {
		return (this.durability <= 0);
	}
};

class OldSword extends Weapon {
	constructor(name,attack,durability,range){
		super(name,attack,durability,range);
		this.name = 'Старый меч';
		this.attack = 20;
		this.durability = 10;
		this.range = 1;
	}
}

class Arm extends Weapon {
	constructor (name,attack,durability,range){
		super(name,attack,durability,range);
		this.name = 'Рука';
		this.attack = 1;
		this.durability = Infinity;
		this.range = 1;
		this.initialDurability = Infinity;
	};
};

class Bow extends Weapon {
	constructor (name,attack,durability,range){
		super(name,attack,durability,range);
		this.name = 'Лук';
		this.attack = 10;
		this.durability = 200;
		this.range = 3;
		this.initialDurability = 200;
	}
}

class LongBow extends Bow {
	constructor (name,attack,durability,range){
		super(name,attack,durability,range);
		this.name = 'Длинный лук';
		this.attack = 15;
		this.range = 4;
	}
}

class Sword extends Weapon {
	constructor (name,attack,durability,range){
		super(name,attack,durability,range);
		this.name = 'Меч';
		this.attack = 25;
		this.durability = 500;
		this.range = 1;
		this.initialDurability = 500;
	}
}

class Axe extends Sword {
	constructor (name,attack,durability,range){
		super(name,attack,durability,range);
		this.name = 'Секира';
		this.attack = 27;
		this.durability = 800;
		this.initialDurability = 800;
	}
}

class Knife extends Weapon {
	constructor (name,attack,durability,range){
		super(name,attack,durability,range);
		this.name = 'Нож';
		this.attack = 5;
		this.durability = 300;
		this.range = 1;
		this.initialDurability = 300;
	}
}

class Staff extends Weapon {
	constructor (name,attack,durability,range){
		super(name,attack,durability,range);
		this.name = 'Посох';
		this.attack = 8;
		this.durability = 300;
		this.range = 2;
		this.initialDurability = 300;
	}
} 

class StormStaff extends Staff {
	constructor (name,attack,durability,range){
		super(name,attack,durability,range);
		this.name = 'Посох Бури';
		this.attack = 10;
		this.range = 3;
	}
}


const oldSword = new OldSword();
const swordOld = new Weapon('Старый меч', 20, 10, 1);      
    
const arm = new Arm();
const bow = new Bow();
const sword = new Sword();
const knife = new Knife();
const staff = new Staff();
const longBow = new LongBow();
const axe = new Axe();	
const stormStaff = new StormStaff();	

const swordOld = new Weapon('Старый меч', 20, 10, 1);
  


//Task 3


