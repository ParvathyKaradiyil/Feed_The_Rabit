var garden,rabbit,apple,orangeLeaf,leaf,redLeaf;
var gardenImg,rabbitImg,appleImg,orangeLeafImg,leafImg,redLeafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
  leafImg = loadImage("leaf.png");
  redLeafImg = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}




function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
  drawSprites();
  var thingsToFall = Math.round(random(1, 4))
  if(frameCount%80==0){
  if(thingsToFall== 1){
    createApples();
  }
  else if(thingsToFall==2){
    createOrangeLeaf();
  }
  else if(thingsToFall==3){
    createLeaf();
  }
  else if (thingsToFall == 4){
    createRedLeaf();
  }
}}
function createApples(){
  apple = createSprite(random(50,350), 40,10,10);
  apple.addImage(appleImg);
  apple.velocityY = 3;
  apple.scale = 0.06;
}

function createOrangeLeaf(){
  orangeLeaf = createSprite(random(50,350), 40,10,10);
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.velocityY = 3;
  orangeLeaf.scale = 0.06;
}

function createLeaf(){
  leaf = createSprite(random(50,350), 40,10,10);
  leaf.addImage(leafImg);
  leaf.velocityY = 3;
  leaf.scale = 0.06;
}

function createRedLeaf(){
  redLeaf = createSprite(random(50,350), 40,10,10);
  redLeaf.addImage(redLeafImg);
  redLeaf.velocityY = 3;
  redLeaf.scale = 0.06
}