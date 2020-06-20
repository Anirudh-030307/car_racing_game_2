class Player{
    constructor(){









    }

    getplayerCount(){
        var toread = database.ref('playerCount');
        toread.on("value",function (data) {
            playerCount = data.val();
        })
    }

    updateplayerCount(Count){
        database.ref('/').update({'playerCount' : Count});
    }

}