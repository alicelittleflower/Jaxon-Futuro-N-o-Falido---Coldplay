var road, road_image;
var jaxon, jaxon_animation;
var wall_right, wall_left;


function preload(){
  road_image = loadImage ("path.png");
  jaxon_animation = loadAnimation ("Runner-1.png", "Runner-2.png");

}
 
function setup(){
  createCanvas(400,400);
  
  wall_right = createSprite (395,200, 10, 400);
  wall_right.shapeColor = rgb(69,22,0);
  wall_left = createSprite (5, 200, 10, 400);
  wall_left.shapeColor = rgb(69,22,0);


  road = createSprite (200,200);
road.addImage (road_image);


jaxon = createSprite (200,200);
jaxon.addAnimation ("estradinha", jaxon_animation);
jaxon.scale = 0.05


}

function draw() {
  background("green");
  jaxon.x=World.mouseX;
  road.velocityY = -6;
  if (road.y < 0){
    road.y = road.height / 2;
  }
  drawSprites();
  
}
