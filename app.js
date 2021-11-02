function getrandomValue(min,max){
    return Math.floor(Math.random() * (max-min))+min;
};

const app=Vue.createApp({
    data(){
        return{//return an object from data
            playerHealth:100,
            monsterHealth:100
        };
    },
    computed:{
        monsterbarstyle(){
            return{width: monsterHealth + '%'};
        },
        playerbarstyle(){
            return{width:  playerHealth  + '%'}
        }
    },
    methods:{
        attackMonster(){
           const attackValue=getrandomValue(5,12);
           this.monsterHealth-=attackValue;
           this.attackplayer();
        },
        attackplayer(){
            const attackValue=getrandomValue(8,15);
            this.playerHealth-=attackValue;
        },
        specialattackmonster(){
            const attackValue=getrandomValue(10,25);
            this.monsterHealth-=attackValue;
            this.attackplayer();
        }
    }
});

app.mount('#game');
