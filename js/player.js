var Player = function(stage){
    this.stage = stage;
    var texture = PIXI.Texture.fromImage("images/ship.png");
    PIXI.TilingSprite.call(this, texture, 84, 84);
    this.position.x = 0;
    this.position.y = 0;
    this.pivot.x = 42;
    this.pivot.y = 42;
    this.moveY = 0;
    this.moveX = 0;
    this.speed = 5;
    this.bullets = [];
    
    //input
    _this = this;
    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);
    window.addEventListener("mousemove", mousemove);
    
    function keyDown(e){
        if(e.keyCode == 87 && !e.repeat){
          _this.moveY += -_this.speed;
        }
        if(e.keyCode == 83 && !e.repeat){
          _this.moveY += _this.speed;
        }
        if(e.keyCode == 65 && !e.repeat){
          _this.moveX += -_this.speed;
        }
        if(e.keyCode == 68 && !e.repeat){
          _this.moveX += _this.speed;
        }
        if(e.keyCode == 32){
          _this.shootBullet();
          e.stopPropagation();
          e.preventDefault();
        }
    }
    function keyUp(e){
        if(e.keyCode == 87){
          _this.moveY -= -_this.speed;
        }
        if(e.keyCode == 83){
          _this.moveY -= _this.speed;
        }
        if(e.keyCode == 65){
          _this.moveX -= -_this.speed;
        }
        if(e.keyCode == 68){
          _this.moveX -= _this.speed;
        }
        if(e.keyCode == 32){
          //_this.shootBullet();
        }
        console.log(e);
    }
    function mousemove(e){
        var mvecX = e.pageX - document.getElementsByTagName('canvas')[0].offsetLeft - _this.position.x;
        var mvecY = e.pageY - document.getElementsByTagName('canvas')[0].offsetTop - _this.position.y;
        var mvecLen = Math.sqrt(mvecX*mvecX + mvecY*mvecY);
        var mvecXNorm = mvecX / mvecLen;
        var mvecYNorm = mvecY / mvecLen;
        var dp = -1 * mvecYNorm ;
        var cp = -(-1 * mvecXNorm);
        var  degrees = Math.acos(dp)// / 3.14 * 180;
        if(cp < 0){
            degrees *= -1;
        }
        _this.rotation = degrees;
    } 
}

Player.prototype = Object.create(PIXI.Sprite.prototype);
Player.constructor = Player;
Player.prototype.update = function(){
   
    this.position.y += this.moveY;
    this.position.x += this.moveX;
}
Player.prototype.shootBullet = function(){
    b = new Bullet(this.position, this.rotation);
    this.stage.addChild(b);
    this.bullets.push(b);
}