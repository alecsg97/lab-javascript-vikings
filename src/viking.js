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
         
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingIndex];
    let result = randomSaxon.receiveDamage(randomViking.strength); 
    if(randomSaxon.health<=0){
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    return result;

        // this.Saxon.receiveDamage = this.Viking.strengthNumber;

        // if (this.health === 0){
        //     this.saxonArmy.pop(Saxon);
        // }
    }

    saxonAttack() {

    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingIndex];
    let result = randomViking.receiveDamage(randomSaxon.strength);
    if(randomViking.health<=0){
      this.vikingArmy.splice(randomVikingIndex);
    }
    return result;

    }

    showStatus() {
        if(this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`
        } else if(this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`
        } else if(this.saxonArmy.length === 1 && this.vikingArmy.length === 1){
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}
