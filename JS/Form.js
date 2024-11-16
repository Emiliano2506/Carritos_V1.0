//formulario
class Form{
    constructor(){
        //imput=caja de texto
        this.input = createInput("").attribute("placeholder", "Ingresa tu nombre");
        this.playButton = createButton("Jugar");
        this.titleImg = createImg("./assets/title.png", "game title");
        this.greeting = createElement("h2");
    }
    setElementsPosition(){
        this.titleImg.position(150,50);
        this.input.position(150,100);
        this.greeting.position(150,25);
        this.playButton.position(25,25);
    }
    setElementsStyle(){
        this.titleImg.class('gameTitle');
        this.input.class('customInput');
        this.greeting.class('greeting');
        this.playButton.class('customButton');
    }
    display(){
        this.setElementsPosition();
        this.setElementsStyle();
        this.handleMausePressed();
    }
    hide(){
        this.greeting.hide();
        this.playButton.hide();
        this.input.hide();
    }
    handleMausePressed(){
        this.playButton.mousePressed(()=>{
            this.input.hide();
            this.playButton.hide();

            var message = `Hola ${this.input.value()}
            </br>espera a que otro jugador se una...`;
            this.greeting.html(message);
        });
    }
}