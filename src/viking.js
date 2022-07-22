// Soldier
class Soldier {
    constructor(healthNumber, strengthNumber) {
        this.health = healthNumber;
        this.strength = strengthNumber;
    }
    attack() {
        return this.strength;
    };

    receiveDamage(damageNumber) {
        this.health -= damageNumber;
    };
}

// Viking
class Viking extends Soldier {
    constructor(VikingName, healthNumber, strengthNumber){

        super(healthNumber, strengthNumber)
        this.name = VikingName;
    }
    receiveDamage(damageNumber) {
        this.health = this.health - damageNumber;
        if (this.health > 0){
            return `${this.name} has received ${damageNumber} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }

    };

    battleCry () {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damageNumber) {
        this.health = this.health - damageNumber;
        if (this.health > 0) {
            return `A Saxon has received ${damageNumber} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    };
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(viking) {
        this.vikingArmy.push(viking);
    };

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    };

    vikingAttack() {
        Saxon.receiveDamage = this.strengthNumber;
    }

    saxonAttack() {
        
    }

    showStatus() {

    }
}
