var score = 0;
var dots;
var EatDots=0;
var TotDots = 0;
var pacman,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacle7,obstacle8,obstacle9,obstacle10,
obstacle11,obstacle12,obstacle13,obstacle14,obstacle15,obstacle16,obstacle17,obstacle18,obstacle19,obstacle20,
obstacle21,obstacle22,obstacle23,obstacle24,obstacle25,obstacle26,obstacle27,obstacle28,obstacle29,obstacle30,obstacle30b;

var ghost1,ghost2,ghost3,ghost_1,ghost_2,ghost_3;
var pills;
var success;
var gameover;

function setup(){
        pacman = createSprite(20, 20);
        pacman.setAnimation("pacman");
        pacman.scale = 0.16;

        ghost1 = createSprite(160, 200);
        ghost1.setAnimation("ghost_1");
        ghost1.scale = 0.06;

        host2 = createSprite(200, 200);
        ghost2.setAnimation("ghost_2");
        ghost2.scale = 0.06;
        background("black");

        ghost3 = createSprite(245, 200);
        ghost3.setAnimation("ghost_3");
        ghost3.scale = 0.06;

        obstacle1 = createSprite(80,50);
        obstacle1.setAnimation("obstacle_1");
        obstacle1.scale=0.1;

        obstacle2 = createSprite(150,70);
        obstacle2.setAnimation("obstacle_2");
        obstacle2.scale=0.1;

        obstacle3 = createSprite(130,200);
        obstacle3.setAnimation("obstacle_2");
        obstacle3.scale=0.1;

        obstacle4 = createSprite(275,200);
        obstacle4.setAnimation("obstacle_2");
        obstacle4.scale=0.1;

        obstacle7 = createSprite(145,240);
        obstacle7.setAnimation("obstacle_1");
        obstacle7.scale=0.1;

        obstacle5 = createSprite(200,240);
        obstacle5.setAnimation("obstacle_1");
        obstacle5.scale=0.1;

        obstacle6 = createSprite(255,240);
        obstacle6.setAnimation("obstacle_1");
        obstacle6.scale=0.1;

        obstacle8 = createSprite(360,30);
        obstacle8.setAnimation("obstacle_2");
        obstacle8.scale=0.1;

        obstacle9 = createSprite(250,20);
        obstacle9.setAnimation("obstacle_2");
        obstacle9.scale=0.1;

        obstacle10 = createSprite(280,100);
        obstacle10.setAnimation("obstacle_2");
        obstacle10.scale=0.1;

        obstacle11 = createSprite(280,120);
        obstacle11.setAnimation("obstacle_1");
        obstacle11.scale=0.1;

        obstacle12 = createSprite(370,160);
        obstacle12.setAnimation("obstacle_1");
        obstacle12.scale=0.1;

        obstacle13 = createSprite(340,190);
        obstacle13.setAnimation("obstacle_2");
        obstacle13.scale=0.1;

        obstacle14 = createSprite(280,300);
        obstacle14.setAnimation("obstacle_1");
        obstacle14.scale=0.1;

        vobstacle15 = createSprite(330,300);
        obstacle15.setAnimation("obstacle_1");
        obstacle15.scale=0.1;

        obstacle16 = createSprite(40,270);
        obstacle16.setAnimation("obstacle_2");
        obstacle16.scale=0.1;

        obstacle17.setAnimation("obstacle_1");
        obstacle17.scale=0.1;

        obstacle18 = createSprite(30,190);
        obstacle18.setAnimation("obstacle_1");
        obstacle18.scale=0.1;

        obstacle19 = createSprite(80,270);
        obstacle19.setAnimation("obstacle_2");
        obstacle19.scale=0.1;

        obstacle20 = createSprite(60,300);
        obstacle20.setAnimation("obstacle_1");
        obstacle20.scale=0.1;

        obstacle21 = createSprite(40,370);
        obstacle21.setAnimation("obstacle_2");
        obstacle21.scale=0.1;

        obstacle22 = createSprite(150,380);
        obstacle22.setAnimation("obstacle_2");
        obstacle22.scale=0.1;

        obstacle23 = createSprite(200,370);
        obstacle23.setAnimation("obstacle_2");
        obstacle23.scale=0.1;

        obstacle24 = createSprite(130,350);
        obstacle24.setAnimation("obstacle_1");
        obstacle24.scale=0.1;

        obstacle25 = createSprite(220,340);
        obstacle25.setAnimation("obstacle_1");
        obstacle25.scale=0.1;

        obstacle26 = createSprite(300,395);
        obstacle26.setAnimation("obstacle_2");
        obstacle26.scale=0.1;

        obstacle27 = createSprite(340,400);
        obstacle27.setAnimation("obstacle_2");
        obstacle27.scale=0.1;

        obstacle28 = createSprite(150,90);
        obstacle28.setAnimation("obstacle_1");
        obstacle28.scale=0.1;

        obstacle29 = createSprite(50,120);
        obstacle29.setAnimation("obstacle_2");
        obstacle29.scale=0.1;

        obstacle30 = createSprite(170,170);
        obstacle30.setAnimation("s1");
        obstacle30.scale=0.1;

        obstacle30b = createSprite(230,170);
        obstacle30b.setAnimation("s1");
        obstacle30b.scale=0.1;

        pills=createGroup();
}

function createdots(numdots, x, y)
{ 
  //Navigating Pacman
  for (var i = 0; i < numdots; i++) {
    dots = createSprite(x+20*i, y, 5, 5);
    dots.shapeColor="yellow";
    pills.add(dots);
    TotDots++;
  }
  
 
}
//Create first train of dots
createdots(10, 50, 20);
//Create second train of dots
createdots(5, 270, 20);
//Create 3rd train of dots
createdots(14, 30, 160);
//Create 4th train of dots
createdots(14, 100, 270);
//Create 5th train of dots
createdots(8, 30, 320);
//Create 6th train of dots
createdots(6, 245, 320);
//Create 7th train of dots
createdots(4, 320, 110);
//Create 8th train of dots
createdots(8, 75, 130);

function draw() {
  background("black");
  
  if(keyDown("up")){
    pacman.setSpeedAndDirection(5, 270);
    pacman.rotation = 270;
    if (pacman.y <ghost1.x)
    {
      ghost1.setSpeedAndDirection(3, 270);
    }
    if (pacman.y <ghost2.x)
    {
      ghost2.setSpeedAndDirection(5, 270);
    }
    if (pacman.y <ghost3.x)
    {
      ghost3.setSpeedAndDirection(4, 270);
    }
    
  }

if(keyDown("down")) {
    pacman.setSpeedAndDirection(5, 90);
    pacman.rotation = 90;
    if (pacman.y <ghost1.x)
    {
      ghost1.setSpeedAndDirection(3, 270);
    }
    if (pacman.y <ghost2.y)
    {
      ghost2.setSpeedAndDirection(5, 270);
    }
    if (pacman.y <ghost3.y)
    {
      ghost3.setSpeedAndDirection(4, 270);
    }
  
}

if(keyDown("left"))
{
    pacman.setSpeedAndDirection(5,180);
    pacman.rotation = 180;
    if (pacman.x <ghost1.x)
    {
      ghost1.setSpeedAndDirection(3, 180);
    }
     if (pacman.x <ghost3.y)
    {
      ghost3.setSpeedAndDirection(4, 180);
    }
     if (pacman.x <ghost2.x)
    {
      ghost2.setSpeedAndDirection(5, 180);
    }
  
  }

if(keyDown("right")){
    pacman.setSpeedAndDirection(5, 360);
    pacman.rotation = 360;
    if (pacman.x < ghost1.x) {
      ghost1.setSpeedAndDirection(3, 180);
    }
  if (pacman.x < ghost3.y) {
      ghost3.setSpeedAndDirection(4, 180);
    }
  if (pacman.x < ghost2.x) {
      ghost2.setSpeedAndDirection(5, 180);
    }
}

for (var i = 0; i < TotDots; i++) {
    if (pills.get(i) != undefined && pills.get(i).isTouching(pacman)) {
      pills.get(i).destroy();
      playSound("Apple-Bite.mp3", false);
      score = score+20;
      EatDots++;
    }
  }
  fill("orange");
  textSize(12);
  text("Score: "+score, 20, 20);
  if (EatDots==TotDots) {
    success = createSprite(200, 200);
    success.setAnimation("youwin");
    success.scale = 0.5;
    pacman.destroy();
  }

if ((pacman.isTouching(ghost1)||pacman.isTouching(ghost3))||pacman.isTouching(ghost2)){
    pacman.destroy();
    ghost1.destroy();
    ghost3.destroy();
    ghost2.destroy();
    gameover = createSprite(200, 200);
    gameover.setAnimation("game over");
    gameover.scale = 0.6;
    
}
   createEdgeSprites();
   ghost1.bounceOff(edges);
   ghost1.bounceOff(obstacle1);
   ghost1.bounceOff(obstacle6);
   ghost1.bounceOff(obstacle5);
   ghost1.bounceOff(obstacle7);
   ghost1.bounceOff(obstacle3);
   ghost1.bounceOff(obstacle2);
   ghost1.bounceOff(obstacle4);
   ghost1.bounceOff(obstacle8);
   ghost1.bounceOff(obstacle9);
   ghost1.bounceOff(obstacle10);
   ghost1.bounceOff(obstacle11);
   ghost1.bounceOff(obstacle12);
   ghost1.bounceOff(obstacle13);
   ghost1.bounceOff(obstacle14);
   ghost1.bounceOff(obstacle15);
   ghost1.bounceOff(obstacle16);
   ghost1.bounceOff(obstacle17);
   ghost1.bounceOff(obstacle18);
   ghost1.bounceOff(obstacle19);
   ghost1.bounceOff(obstacle20);
   ghost1.bounceOff(obstacle21);
   ghost1.bounceOff(obstacle22);
   ghost1.bounceOff(obstacle23);
   ghost1.bounceOff(obstacle24);
   ghost1.bounceOff(obstacle25);
   ghost1.bounceOff(obstacle26);
   ghost1.bounceOff(obstacle27);
   ghost1.bounceOff(obstacle28);
   ghost1.bounceOff(obstacle29);
    
   ghost2.bounceOff(edges);
   ghost2.bounceOff(obstacle1);
   ghost2.bounceOff(obstacle6);
   ghost2.bounceOff(obstacle5);
   ghost2.bounceOff(obstacle7);
   ghost2.bounceOff(obstacle3);
   ghost2.bounceOff(obstacle2);
   ghost2.bounceOff(obstacle4);
   ghost2.bounceOff(obstacle8);
   ghost2.bounceOff(obstacle9);
   ghost2.bounceOff(obstacle10);
   ghost2.bounceOff(obstacle11);
   ghost2.bounceOff(obstacle12);
   ghost2.bounceOff(obstacle13);
   ghost2.bounceOff(obstacle14);
   ghost2.bounceOff(obstacle15);
   ghost2.bounceOff(obstacle16);
   ghost2.bounceOff(obstacle17);
   ghost2.bounceOff(obstacle18);
   ghost2.bounceOff(obstacle19);
   ghost2.bounceOff(obstacle20);
   ghost2.bounceOff(obstacle21);
   ghost2.bounceOff(obstacle22);
   ghost2.bounceOff(obstacle23);
   ghost2.bounceOff(obstacle24);
   ghost2.bounceOff(obstacle25);
   ghost2.bounceOff(obstacle26);
   ghost2.bounceOff(obstacle27);
   ghost2.bounceOff(obstacle28);
   ghost2.bounceOff(obstacle29);
    
   ghost3.bounceOff(edges);
   ghost3.bounceOff(obstacle1);
   ghost3.bounceOff(obstacle6);
   ghost3.bounceOff(obstacle5);
   ghost3.bounceOff(obstacle7);
   ghost3.bounceOff(obstacle3);
   ghost3.bounceOff(obstacle2);
   ghost3.bounceOff(obstacle4);
   ghost3.bounceOff(obstacle8);
   ghost3.bounceOff(obstacle9);
   ghost3.bounceOff(obstacle10);
   ghost3.bounceOff(obstacle11);
   ghost3.bounceOff(obstacle12);
   ghost3.bounceOff(obstacle13);
   ghost3.bounceOff(obstacle14);
   ghost3.bounceOff(obstacle15);
   ghost3.bounceOff(obstacle16);
   ghost3.bounceOff(obstacle17);
   ghost3.bounceOff(obstacle18);
   ghost3.bounceOff(obstacle19);
   ghost3.bounceOff(obstacle20);
   ghost3.bounceOff(obstacle21);
   ghost3.bounceOff(obstacle22);
   ghost3.bounceOff(obstacle23);
   ghost3.bounceOff(obstacle24);
   ghost3.bounceOff(obstacle25);
   ghost3.bounceOff(obstacle26);
   ghost3.bounceOff(obstacle27);
   ghost3.bounceOff(obstacle28);
   ghost3.bounceOff(obstacle29);
   
   
  drawSprites();
     
}