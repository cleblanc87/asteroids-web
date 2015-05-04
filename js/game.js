

var Game = function(){

    function init() {
    
        this.renderer = new PIXI.WebGLRenderer(screen.width, screen.height);
    
        document.body.appendChild(this.renderer.view);
            
        this.stage = new PIXI.Container();
        this.player = new Player(stage);
    
        stage.addChild(player);
        requestAnimationFrame(animate);
    }
        
    
    function animate() {
        
        checkInput();
      
        renderer.render(stage);
        player.update();
    
        requestAnimationFrame(animate);
    }
    
    function checkInput(){
        
    }
    
    init();
}


var game = new Game();