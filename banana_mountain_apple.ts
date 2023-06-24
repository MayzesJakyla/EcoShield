// Imports
import { Sunscreen, Container } from "./sustainable-sunscreen";
import { Bottle, Tube } from "./plastic-free-packaging";

// Main
class SustainableSunscreenwithPlasticFreePackaging {
    constructor() {
        this.sunscreen = new Sunscreen();
        this.container = new Container();
    }

    setBottlePackaging(volume: number) {
        this.container.setPackaging(new Bottle(volume));
    }

    setTubePackaging(volume: number) {
        this.container.setPackaging(new Tube(volume));
    }
}

// Sunscreen Class
class Sunscreen {
    private spfLevel: number;
    private ingredients: string[];

    constructor() {
        this.spfLevel = 50;
        this.ingredients = [
            "Zinc Oxide",
            "Titanium Dioxide",
            "Avobenzone",
            "Octinoxate"
        ];
    }
    getSPFLevel(): number {
        return this.spfLevel;
    }

    getIngredients(): string[] {
        return this.ingredients;
    }
}

// Container Class
class Container {
    private packaging: any;

    constructor() {
        this.packaging = null;
    }

    setPackaging(packaging: any) {
        this.packaging = packaging;
    }

    getPackaging(): any {
        return this.packaging;
    }
}

// Bottle Class
class Bottle {
    private volume: number;

    constructor(volume: number) {
        this.volume = volume;
    }

    getVolume(): number {
        return this.volume;
    }
}

// Tube Class
class Tube {
    private volume: number;

    constructor(volume: number) {
        this.volume = volume;
    }

    getVolume(): number {
        return this.volume;
    }
}