function getrandomValue(min,max){
    return  Math.floor(Math.random() * (max-min))+min;
}

const app=Vue.createapp({
    data(){
        return{//return an object from data
            playerHealth:100,
            monsterHealth:100,
        };
    },
    methods:{
        attackMonster(){
           const attackValue=getrandomValue(5-12);
           this.monsterHealth-=attackValue;
           this.attackplayer();
        },
        attackplayer(){
            const attackValue=getrandomValue(8-15);
            this.playerHealth-=attackValue;
        }
    }
});

app.mount('#game');
