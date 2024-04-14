class Character {
    constructor(name, cls, weapon, health, mana) {
        this.name = name;
        this.cls = cls;
        this.weapon = weapon;
        this.health = health;
        this.mana = mana;
    }
}

class Weapon {
    constructor(type, damage, speed, range) {
        this.type = type;
        this.damage = damage;
        this.speed = speed;
        this.range = range;
    }
}

class CharacterFactory {
    createCharacter(name) {
    }
    
    createWeapon() {
    }
}

class WarriorSwordFactory extends CharacterFactory {
    createCharacter(name) {
        const weapon = this.createWeapon();
        return new Character(name, "Warrior", weapon, 150, 30);
    }
    
    createWeapon() {
        return new Weapon("Sword", 30, 2, 1);
    }
}

class MageStaffFactory extends CharacterFactory {
    createCharacter(name) {
        const weapon = this.createWeapon();
        return new Character(name, "Mage", weapon, 100, 150);
    }
    
    createWeapon() {
        return new Weapon("Staff", 20, 1, 3);
    }
}

class ArcherBowFactory extends CharacterFactory {
    createCharacter(name) {
        const weapon = this.createWeapon();
        return new Character(name, "Archer", weapon, 120, 50);
    }
    
    createWeapon() {
        return new Weapon("Bow", 25, 3, 5);
    }
}
class CharacterCreator {
    constructor() {
        this.factory = null;
    }
    
    setFactory(factory) {
        this.factory = factory;
    }

    createCharacter(name) {
        if (!this.factory) {
            throw new Error("Factory is not set");
        }
        return this.factory.createCharacter(name);
    }
}

const game = new CharacterCreator();

game.setFactory(new WarriorSwordFactory());
const warrior = game.createCharacter("Arthur");
console.log(warrior);

game.setFactory(new MageStaffFactory());
const mage = game.createCharacter("Merlin");
console.log(mage);


game.setFactory(new ArcherBowFactory());
const archer = game.createCharacter("Robin");
console.log(archer);

function getPlayerChoice(characterType) {
    const factoryMap = {
        "WarriorSword": WarriorSwordFactory,
        "MageStaff": MageStaffFactory,
        "ArcherBow": ArcherBowFactory
    };

    game.setFactory(new factoryMap[characterType]());
    return game.createCharacter("PlayerName");
}

const playerCharacter = getPlayerChoice("MageStaff");
console.log(playerCharacter);