class Furniture {
    constructor(name, style, material, price) {
        this.name = name;
        this.style = style;
        this.material = material;
        this.price = price;
    }
}

class FurnitureFactory {
    createChair() {
        throw new Error("abstract method");
    }

    createTable() {
        throw new Error("abstract method");
    }

    createSofa() {
        throw new Error("abstract method");
    }
}

class ModernWoodFactory extends FurnitureFactory {
    createChair() {
        return new Chair("Modern Wood Chair", "Modern", "Wood", 150.00);
    }

    createTable() {
        return new Table("Modern Wood Table", "Modern", "Wood", 550.00);
    }

    createSofa() {
        return new Sofa("Modern Wood Sofa", "Modern", "Wood", 1200.00);
    }
}

class TraditionalMetalFactory extends FurnitureFactory {
    createChair() {
        return new Chair("Traditional Metal Chair", "Traditional", "Metal", 85.00);
    }

    createTable() {
        return new Table("Traditional Metal Table", "Traditional", "Metal", 300.00);
    }

    createSofa() {
        return new Sofa("Traditional Metal Sofa", "Traditional", "Metal", 950.00);
    }
}

class IndustrialGlassFactory extends FurnitureFactory {
    createChair() {
        return new Chair("Industrial Glass Chair", "Industrial", "Glass", 125.00);
    }

    createTable() {
        return new Table("Industrial Glass Table", "Industrial", "Glass", 450.00);
    }

    createSofa() {
        return new Sofa("Industrial Glass Sofa", "Industrial", "Glass", 1100.00);
    }
}
class Chair extends Furniture {
    constructor(name, style, material, price) {
        super(name, style, material, price);
    }
}

class Table extends Furniture {
    constructor(name, style, material, price) {
        super(name, style, material, price);
    }
}

class Sofa extends Furniture {
    constructor(name, style, material, price) {
        super(name, style, material, price);
    }
}

class FurnitureCreator {
    constructor() {
        this.factory = null;
    }

    setFactory(factory) {
        this.factory = factory;
    }

    createChair() {
        if (!this.factory) {
            throw new Error("not set");
        }
        return this.factory.createChair();
    }

    createTable() {
        if (!this.factory) {
            throw new Error("not set");
        }
        return this.factory.createTable();
    }

    createSofa() {
        if (!this.factory) {
            throw new Error("not set");
        }
        return this.factory.createSofa();
    }
}


const furnitureCreator = new FurnitureCreator();

furnitureCreator.setFactory(new ModernWoodFactory());
console.log(furnitureCreator.createChair());
console.log(furnitureCreator.createTable());
console.log(furnitureCreator.createSofa());


furnitureCreator.setFactory(new TraditionalMetalFactory());
console.log(furnitureCreator.createChair());
console.log(furnitureCreator.createTable());
console.log(furnitureCreator.createSofa());

function getUserSelectedFurniture(style, material) {
    const factories = {
        "Modern Wood": ModernWoodFactory,
        "Traditional Metal": TraditionalMetalFactory,
        "Industrial Glass": IndustrialGlassFactory
    };

    const factoryClass = factories[`${style} ${material}`];
    if (!factoryClass) {
        throw new Error("Selected style and material combination is not supported.");
    }

    const factory = new factoryClass();
    furnitureCreator.setFactory(factory);

    return {
        chair: furnitureCreator.createChair(),
        table: furnitureCreator.createTable(),
        sofa: furnitureCreator.createSofa()
    };
}

console.log(getUserSelectedFurniture("Modern", "Wood"));
