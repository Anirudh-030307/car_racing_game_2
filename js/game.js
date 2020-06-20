class Game{
    constructor(){









    }

    getState(){
        var toread = database.ref('gameState');
        toread.on("value",function (data) {
            gameState = data.val();
        })
    }

    updateState(State){
        database.ref('/').update({'gameState' : State});
    }

    start(){
        if (gameState === 0) {
            form = new Form();
            form.display();
        }
    }

}