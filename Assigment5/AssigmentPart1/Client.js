class Character {
    constructor(name, appearance, abilities, equipment, attributes) {
        this.name = name;
        this.appearance = appearance;
        this.abilities = abilities;
        this.equipment = equipment;
        this.attributes = attributes;
    }
}

class CharacterFactory {
    createCharacter(name) {
        throw new Error("This method is abstract and must be implemented by subclasses");
    }
}

class WarriorFactory extends CharacterFactory {
    createCharacter(name) {
        const appearance = new Appearance("Rugged", "Brown Hair", "Scars");
        const abilities = [new Ability("Sword Swing"), new Ability("Shield Block")];
        const equipment = [new Equipment("Sword"), new Equipment("Shield")];
        const attributes = new Attributes({ strength: 10, intelligence: 3, agility: 4 });
        return new Character(name, appearance, abilities, equipment, attributes);
    }
}

class MageFactory extends CharacterFactory {
    createCharacter(name) {
        const appearance = new Appearance("Ethereal", "White Hair", "Tattoos");
        const abilities = [new Ability("Fireball"), new Ability("Ice Spike")];
        const equipment = [new Equipment("Staff"), new Equipment("Robe")];
        const attributes = new Attributes({ strength: 2, intelligence: 10, agility: 3 });
        return new Character(name, appearance, abilities, equipment, attributes);
    }
}

class ArcherFactory extends CharacterFactory {
    createCharacter(name) {
        const appearance = new Appearance("Stealthy", "Green Hair", "Camouflage");
        const abilities = [new Ability("Bow Shot"), new Ability("Eagle Eye")];
        const equipment = [new Equipment("Bow"), new Equipment("Quiver")];
        const attributes = new Attributes({ strength: 4, intelligence: 6, agility: 10 });
        return new Character(name, appearance, abilities, equipment, attributes);
    }
}

class Appearance {
    constructor(style, hairColor, specialMarks) {
        this.style = style;
        this.hairColor = hairColor;
        this.specialMarks = specialMarks;
    }
}

class Ability {
    constructor(name) {
        this.name = name;
    }
}

class Equipment {
    constructor(name) {
        this.name = name;
    }
}

class Attributes {
    constructor({ strength, intelligence, agility }) {
        this.strength = strength;
        this.intelligence = intelligence;
        this.agility = agility;
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
        if (this.factory == null) {
            throw new Error("Factory not set");
        }
        return this.factory.createCharacter(name);
    }
}


const creater = new CharacterCreator();
creater.setFactory(new WarriorFactory());
const warrior = creater.createCharacter("Conan");

console.log(warrior);

creater.setFactory(new MageFactory());
const mage = creater.createCharacter("Merlin");

console.log(mage);

creater.setFactory(new ArcherFactory());
const archer = creater.createCharacter("Legolas");

console.log(archer);