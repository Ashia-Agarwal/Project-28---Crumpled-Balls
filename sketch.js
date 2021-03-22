var engine, world, ground, groundSprite;
var b, d;
function setup() {
	createCanvas(800, 500);
	engine = Matter.Engine.create();
	world = engine.world;
	ground = Matter.Bodies.rectangle(width / 2, height - 5, width, 10, {isStatic: true});
  	Matter.World.add(world, ground);
	groundSprite = createSprite(width / 2, height - 5, width, 10);
	groundSprite.shapeColor = color(0, 0, 255);
	b = new Ball(200, 120);
	d = new Dustbin(world, ground.position.y);
	l = new Launcher(b.body, {x: 375, y: 125});
	Matter.Engine.run(engine);
}

function draw() {
  background(255);
  d.display();
  b.display();
  l.display();
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(b.body, b.body.position, {x: 35, y: -55});
	}
	if (keyCode === DOWN_ARROW) {
		Matter.Body.applyForce(b.body, b.body.position, {x: -35, y: 55});
	}
}

function mouseDragged() {
    Matter.Body.setPosition(b.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
    l.fly();
}