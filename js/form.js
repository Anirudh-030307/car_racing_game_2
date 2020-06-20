class Form {
    constructor(){









    }

    display(){
        var title = createElement('h2');
        title.html("CAR RACING GAME");
        title.position(130,0);

        var input = createInput("NAME");
        input.position(130,160);

        var button = createButton('PLAY');
        button.position(250,200);
        button.mousePressed( function () {
            input.hide();
            button.hide();
            var greeting = createElement('h3');
            greeting.html("HELLO");
            greeting.position(130,160);
        })
    }

}