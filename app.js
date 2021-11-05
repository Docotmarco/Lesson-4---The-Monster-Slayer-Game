function getrandomValue(min,max){
    return Math.floor(Math.random() * (max,min)) + min;
}


const app = Vue.createApp({
    data(){
        return {
            playerHealth: 100,
            monsterHealth:100,
            currentRound:0,
            winner:null,
            logmessages:[]
        };
    },
    watch:{
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0){
                //draw
                this.winner="Draw";
            }else if(value <=0){
                //player lost
                this.winner="Monster";
            }
        },
        monsterHealth(value){
            if(value <=0 && this.playerHealth <= 0){
                //draw
                this.winner="Draw";
            }else if(value <=0){
                //monster lost
                this.winner="Player";
            }
        },
    },
    computed:{
        monsterbarStyle(){
            if(this.monsterHealth <0){
                return{width:'0%'};
            }
            return { width: this.monsterHealth + '%'};
        },
        playerbarStyle(){
            if(this.playerHealth <0){
                return {width: '0%'};
            }
            return { width: this.playerHealth + '%'};
        },
        mayuseSpecialAttack(){
            return this.currentRound % 3 !==0;
        }
      
    },
    methods:{
        startGame(){
            this.playerHealth=100;
            this.monsterHealth=100;
            this.winner=null;
            this.currentRound=0;
            this.logmessages=[];
        },
        attackMonster(){
          this.currentRound++;
          const attackValue=getrandomValue(5,12);
          this.monsterHealth-=attackValue;
          this.addlogMessage('Player','attack',attackValue);
          this.attackPlayer();
        },
        attackPlayer(){
            const attackValue=getrandomValue(8,15);
            this.playerHealth-=attackValue;
            this.addlogMessage('Monster','attack',attackValue);
        },
        specialAttackmonster(){
            this.currentRound++;
            const attackValue=getrandomValue(10,25);
            this.monsterHealth-=attackValue;
            this.addlogMessage('Player','Special_attack',attackValue);
            this.attackPlayer();
        },
        healPLayer(){
            this.correntRound++;
            const healValue=getrandomValue(8,20);
            if(this.playerHealth + healValue > 100){
                this.playerHealth=100;
            }else{
                this.playerHealth +=healValue;
            }
           this.addlogMessage('Player','heal',healValue);
           this.attackPlayer();
        },
        surrender(){
           this.winner='Monster';
        },
        addlogMessage(who, what , value){
            this.logmessages.unshift({
                actionBy:who,
                actionType:what,
                actionValue:value
            });
        }
    },
});
app.mount('#game');
