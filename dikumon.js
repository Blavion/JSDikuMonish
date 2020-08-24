class dikumon {
    constructor(name ,health, damage, type){
        this.level = 1;
        this.name = name;
        this.health = health;
        this.maxHealth = health;
        this.damage = damage;
        this.type = type;
        this.experience = 0;
        //lazyness. Not an error 
        this.experience_to_level = health;
        this.dead = false;
    }

    ToString(){
        return ("Name: "+ this.name + ". Level: "+this.level+
        ". Health: "+this.health+" out of "+ this.maxHealth +". Damage: "+ 
        this.damage+ ". Type: " +this.type);
    }

    attack(dikumon){
        try {
            if (this.dead) {
                console.log(this.name + " is dead so it can not attack");
            }
            else
                {dikumon.health -= this.damage;}
                console.log(this.name + " is attacking " + dikumon.name + " and he takes " + this.damage + " damage")} 
        catch (error) {
            alert(this.name + " is not a dikumon and no action happend");
        }
    }

    checkLevel(){
        if(this.experience >= this.experience_to_level){
            this.LevelUp();
        }
    }

    checkHealth(){
        if (this.health <= 0){
            this.dead = true;
            console.log(this.name + " is dead and can not fight anymore." );
        }
    }
    Revive(){
        this.health = this.maxHealth;
    }

    LevelUp(){
        this.level += 1;
        this.maxHealth += (Math.floor(this.maxHealth/5));
        this.health = this.maxHealth;
        this.damage += (Math.floor(this.damage/10));
        this.experience_to_level = this.maxHealth;
        this.experience = 0;
        console.log(this.name + " has leveled up and is now level: " + this.level);
    }
}

module.exports = dikumon;