var Bullet = function(position, rotation){
	var texture = PIXI.Texture.fromImage("images/missile.png");
    PIXI.TilingSprite.call(this, texture, 14, 14);
	this.position.x = position.x;
	this.position.y = position.y;
	this.rotation = rotation;
	this.velocity = PIXI.Point(1,1);
}

Bullet.prototype = Object.create(PIXI.Sprite.prototype);
Bullet.constructor = Bullet;