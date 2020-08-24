class Arena{
    constructor(dikumon1, dikumon2){
        this.contenter_1 = dikumon1;
        this.contenter_2 = dikumon2;
        this.fightIsOver = false;
        
    }

    fight(){
        try {
            console.log("The Fight is about to begin!!! \n"+
            "In the first corner we have: " + this.contenter_1.ToString() +"\n" +
            "And in the second corner we have: " + this.contenter_2.ToString())
            //Simple loop over the fight
            while(!this.fightIsOver){
                this.contenter_1.attack(this.contenter_2);
                this.contenter_2.checkHealth()
                
                if (this.contenter_2.dead == true) {
                    this.fightIsOver = true;
                    this.contenter_1.experience += 100;
                    this.contenter_1.checkLevel();
                    this.winner = this.contenter_1;
                }
                let temp = this.contenter_2;
                this.contenter_2 = this.contenter_1;
                this.contenter_1 = temp;
            }
            console.log( this.winner.name + " was the winner of the fight!");

        } catch (error) {
            console.log((error))
        }   
    }
}
module.exports = Arena;