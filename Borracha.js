class Borracha{
	constructor(x,y,r)
	{
// adicione opções a bola de borracha, coloque densidade baixa e atrito alto
		this.x=x;
		this.y=y;
		this.r=2*r;
		this.body=Bodies.circle(this.x, this.y, this.r, options);
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push();
			translate(pos.x, pos.y);
			rectMode(RADIUS);
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			ellipseMode(CENTER);
			//use ellipse() aqui para desehar a bola de borracha

			pop();
	}

}
