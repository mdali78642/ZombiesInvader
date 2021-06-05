function preload()
{
  backgroundImg = loadImage("sprites/Background.png")
  trevorStand = loadAnimation("sprites/shooting2.png")
  trevorGeneral = loadAnimation("sprites/playerRun1.png","sprites/playerRun2.png","sprites/playerRun3.png","sprites/playerRun4.png","sprites/playerRun5.png","sprites/playerRun6.png");
}




function setup() {
  createCanvas(1500,800);

 trevor = createSprite(300, 500, 50, 50);
 trevor.addAnimation("trevor",trevorStand);
 trevor.addAnimation("trevor",trevorGeneral);
 trevor.addAnimation("trevor",trevorGeneral);
 trevor.scale = 0.5;

 zombiesGroup = new Group()


}

function draw() {
  background(backgroundImg);  

  if(keyWentDown("space"))
  {
    bullet = createSprite(370, 460, 25, 25);
    bullet.velocityX = 2;
  }

  if(keyWentDown(RIGHT_ARROW))
  {
    trevor.x = trevor.x+2;
    trevor.changeAnimation("trevor",trevorGeneral);
    trevor.scale = 0.5;
  }
  if(keyWentDown(LEFT_ARROW))
  {
    trevor.x = trevor.x-2;
    trevor.changeAnimation("trevor",trevorGeneral);
    trevor.scale = 0.5;
  }
  if(keyWentUp(RIGHT_ARROW))
  {
    trevor.changeAnimation("trevor",trevorStand);
  }
 
  spawnZombies();

  if(bullet.isTouching(zombiesGroup))
  {
    zombiesGroup.destroyEach();
  }
  drawSprites();
}
function spawnZombies()
{
  
  if(frameCount%100===0)
  {
    var randomX = Math.round(random(100, 1200))
    var randomY = Math.round(random(100, 1300))
   Zombies1 = createSprite(1500,randomY,65,65);
   Zombies1.velocityX = -1;
   zombiesGroup.add(Zombies1);
  }
}
