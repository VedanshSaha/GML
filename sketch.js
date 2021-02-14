/*
1.This Is For The Game Masters League Of Whitehat Jr
2.Here I @Vedansh Saha will be making A New Game "The Red Moon"
3.Some Of The Assets Would be Taken From Google And Some Will Be Drawn :P
4.Let's Start
*/

//Constants

//Variables
var level = 1;
var speed = 0;
var gameState;
//var jbb = 0;
//var e = 0;

//lets

//Function Preload
function preload() {
  //loading the images
  main = loadImage("final.svg")
  ar = loadImage("ar.svg")
  ak = loadImage("ak.png")
  bad = loadSound("bad.mp3")
  groundimg = loadImage("ground.png");
  yw = loadImage("yw.png")
  gp = loadImage("2E.png")
  gd = loadImage("gd.svg")
  bg = loadImage("bg.png");
  gph = loadImage("item1.svg");
  moonImg = loadImage("red.png");
  middle = loadImage("middle.svg");
  right = loadImage("right.svg");
  left = loadImage("left.svg");
  up = loadImage("up.svg");
  ru = loadImage("ru.svg");
  lu = loadImage("lu.svg");
  cool = loadSound("cool.mp3");
  g1 = loadImage("fat.svg");
  g2 = loadImage("thin.svg");
  jb = loadImage("jb.png");
  ob = loadImage("c2.svg")
  reddy = loadImage("reddy.svg")
  WHITEHAT = loadImage("WHITEHAT.png")
} //Preload Ends

//Function Setup
function setup() {
  cool.loop();
  console.clear();
  console.log(
    "%cHI!",
    "color:lime;font-family:italic;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
  );
  console.log(
    "%cI am Vedansh Saha",
    "color:cyan;font-family:harlow solid;font-size:2rem;-webkit-text-stroke: 0.2px black;font-weight:bold"
  );

  console.log(
    "%cThis is part of your browser intended for developers. If someone told you to copy-and-paste something here, don't do it! It could allow them to take over your info or do many other harmful things. If you don't understand what exactly you are doing here, you should close this window without doing anything.",
    "color:red;font-family:Verdana;font-size:1rem;-webkit-text-stroke: 0.2px black;font-weight:bold"
  );

  //console.log('%cb %cb ', 'color:blue;border:1px solid black', 'color:black;border:1px solid black');
  canvas = createCanvas(1000, 400);
  gameState = 0
  spikeGroup = createGroup();

  ground = createSprite(500, 390, 500 * 2, 100);
  ground.visible = false;

  player = createSprite(100, 160, 30, 30);
  player.addImage("middle image", middle);
  player.addImage("right image", right);
  player.addImage("left image", left);
  player.addImage("up image", up);
  player.addImage("right up image", ru);
  player.addImage("left up image", lu);
  //player.debug = true
  player.setCollider("rectangle", 3, 3, 30, 30);
} //Setup Ends

//Function Draw
function draw() {
  if(gameState === 0){
  background(bg);

  imageMode(CENTER);

  if(level<=4){
    image(gph, 500, 200, 1200, 400);
    image(moonImg, 870, 71, 200, 200);
  }else{
    image(gd, 500, 230, 1050, 300);
  }
  
  image(groundimg, 500, 390, 1000, 100);
  

  if(level > 4){
    image(gp, 500, 390, 1000, 100);
  }
  speed += 2;
  //add gravity
  player.velocityY = player.velocityY + 1;

  //Key Things?
  if (keyDown("right")) {
    player.x += 5;
    player.changeImage("right image");
  }

  if (keyDown("left")) {
    player.x -= 5;
    player.changeImage("left image");
  }

  if (keyDown("up")) {
    //player.x -= 5
    player.changeImage("up image");
  }

  if (keyDown("up") && keyDown("right")) {
    //player.x -= 5
    player.changeImage("right up image");
  }

  if (keyDown("up") && keyDown("left")) {
    //player.x -= 5
    player.changeImage("left up image");
  }

  if (!keyDown("right") && !keyDown("left") && !keyDown("up")) {
    player.changeImage("middle image");
  }

  //die
  die(spikeGroup);

  if (level === 1) {
    //image(gph, 500, 200, 1200, 400);
    //Spike
    var spike = createSprite(320, 320);
    var i = loadImage("spike.svg");
    spike.addImage("Image Of The Deadly Spike", i);
    spike.scale = 0.6;
    // spike.debug = true
    // player.debug = true
    //this.spike.debug = true
    spike.lifetime = 2;
    spikeGroup.add(spike);
    // spikeGroup.add(spike, spike2);
    // die(spikeGroup);

    //Spike2
    var spike2 = createSprite(430, 320);
    spike2.addImage("Image Of The Deadly Spike", i);
    spike2.scale = 0.6;
    // spike.debug = true
    // player.debug = true
    //this.spike.debug = true
    spike2.lifetime = 2;
    spikeGroup.add(spike2);
    // spikeGroup.add(spike, spike2);
    // die(spikeGroup);

    //Spike3
    var spike3 = createSprite(540, 320);
    spike3.addImage("Image Of The Deadly Spike", i);
    spike3.scale = 0.6;
    // spike.debug = true
    // player.debug = true
    //this.spike.debug = true
    spike3.lifetime = 2;
    spikeGroup.add(spike3);
    // spikeGroup.add(spike, spike2);
    // die(spikeGroup);

    //Change of level
    if (player.x > 1000) {
      player.x = 100;
      player.y = 160;
      level = 2;
    }
  } else if (level === 2) {
  //  image(gph, 500, 200, 1200, 400);
    //Spike
    var spike = createSprite(190, 320);
    var i = loadImage("spike.svg");
    spike.addImage("Image Of The Deadly Spike", i);
    spike.scale = 0.6;
    // spike.debug = true
    // player.debug = true
    //this.spike.debug = true
    spike.lifetime = 2;
    spikeGroup.add(spike);
    // spikeGroup.add(spike, spike2);
    // die(spikeGroup);

    //Spike2
    var spike2 = createSprite(300, 320);
    //var i = loadImage("spike.svg")
    spike2.addImage("Image Of The Deadly Spike", i);
    spike2.scale = 0.6;
    // spike.debug = true
    // player.debug = true
    //this.spike.debug = true
    spike2.lifetime = 2;
    spikeGroup.add(spike2);
    // spikeGroup.add(spike, spike2);
    // die(spikeGroup);

    //Spike3
    var spike3 = createSprite(410, 320);
    //var i = loadImage("spike.svg")
    spike3.addImage("Image Of The Deadly Spike", i);
    spike3.scale = 0.6;
    // spike.debug = true
    // player.debug = true
    //this.spike.debug = true
    spike3.lifetime = 2;
    spikeGroup.add(spike3);
    // spikeGroup.add(spike, spike2);
    // die(spikeGroup);

    //Spike4
    var spike4 = createSprite(520, 320);
    //var i = loadImage("spike.svg")
    spike4.addImage("Image Of The Deadly Spike", i);
    spike4.scale = 0.6;
    // spike.debug = true
    // player.debug = true
    //this.spike.debug = true
    spike4.lifetime = 2;
    spikeGroup.add(spike4);
    // spikeGroup.add(spike, spike2);
    // die(spikeGroup);

    //Spike2
    var spike5 = createSprite(630, 320);
    //var i = loadImage("spike.svg")
    spike5.addImage("Image Of The Deadly Spike", i);
    spike5.scale = 0.6;
    // spike.debug = true
    // player.debug = true
    //this.spike.debug = true
    spike5.lifetime = 2;
    spikeGroup.add(spike5);
    // spikeGroup.add(spike, spike2);
    // die(spikeGroup);

    //Spike3
    var spike6 = createSprite(740, 320);
    //var i = loadImage("spike.svg")
    spike6.addImage("Image Of The Deadly Spike", i);
    spike6.scale = 0.6;
    // spike.debug = true
    // player.debug = true
    //this.spike.debug = true
    spike6.lifetime = 2;
    spikeGroup.add(spike6);
    // spikeGroup.add(spike, spike2);
    // die(spikeGroup);

    if (player.x < 20) {
      level = 1;
      player.x = 1000;
    }
    if (player.x > 1000) {
      level = 3;
      player.x = 100;
      player.y = 160;
    }
  } else if (level === 3) {
 //   image(gph, 500, 200, 1200, 400);
    //gr1
    var ground1 = createSprite(350, 270, 40, 200);
    ground1.addImage("g1", g1);
    ground1.scale = 0.75;
    ground1.lifetime = 2;
    player.collide(ground1);
    //gr2
    var ground2 = createSprite(550, 270, 40, 200);
    ground2.addImage("g2", g2);
    ground2.scale = 0.75;
    ground2.lifetime = 2;
    player.collide(ground2);
    //Spike
    var spike = createSprite(450, 302);
    var i = loadImage("spike.svg");
    spike.addImage("Image Of The Deadly Spike", i);
    spike.scale = 1;
    // spike.debug = true
    // player.debug = true
    //this.spike.debug = true
    spike.lifetime = 2;
    spikeGroup.add(spike);
    //Jump Boost
    if (player.x > 240) {
    } else {
      push();
      fill("cyan");
      textSize(12);
      pos = sin(speed * 2) * 15 + 290;
      text("JUMP BOOST", 230, pos - 30);
      image(jb, 270, pos, 50, 100 / 2);
      pop();
      jbb = 1
    }

    if (player.x < 20) {
      level = 2;
      player.x = 1000;
    }

    if (player.x > 1000) {
      level = 4;
      player.x = 100;
      player.y = 160;
    }
  } else if (level === 4) {
    //image(gph, 500, 200, 1200, 400);
    //gr1
    var ground1 = createSprite(105,270,40,200)
    ground1.addImage("g2",g2);
    ground1.scale = 0.55
    ground1.lifetime = 2;
    player.collide(ground1)

    //gr2
    var ground2 = createSprite(255,270,40,200)
    ground2.addImage("g2",g2);
    ground2.scale = 0.65
    ground2.lifetime = 2;
    player.collide(ground2)

    //gr3
    var ground3 = createSprite(405,270,40,200)
    ground3.addImage("g2",g2);
    ground3.scale = 0.75
    ground3.lifetime = 2;
    player.collide(ground3)

    //gr2
    var ground4 = createSprite(555,270,40,200)
    ground4.addImage("g2",g2);
    ground4.scale = 0.65
    ground4.lifetime = 2;
    player.collide(ground4)

    //gr1
    var groundw = createSprite(705,270,40,200)
    groundw.addImage("g2",g2);
    groundw.scale = 0.62
    groundw.lifetime = 2;
    player.collide(groundw)

    //gr2
    var ground2_ = createSprite(855,270,40,200)
    ground2_.addImage("g2",g2);
    ground2_.scale = 0.65
    ground2_.lifetime = 2;
    player.collide(ground2_)

    // //gr3
    // var ground3_ = createSprite(1005,270,40,200)
    // ground3_.addImage("g2",g2);
    // ground3_.scale = 0.75
    // ground3_.lifetime = 2;
    // player.collide(ground3_)

    // //gr2
    // ground4_ = createSprite(1155,270,40,200)
    // ground4_.addImage("g2",g2);
    // ground4_.scale = 0.65
    // ground4_.lifetime = 2;
    // player.collide(ground4_)

     //Spike
     var spike = createSprite(320, 320);
     var i = loadImage("spike.svg");
     spike.addImage("Image Of The Deadly Spike", i);
     spike.scale = 0.6;
     // spike.debug = true
     // player.debug = true
     //this.spike.debug = true
     spike.lifetime = 2;
     spikeGroup.add(spike);

      //Spike
    var spike2 = createSprite(170, 320);
   // var i = loadImage("spike.svg");
    spike2.addImage("Image Of The Deadly Spike", i);
    spike2.scale = 0.6;
    // spike.debug = true
    // player.debug = true
    //this.spike.debug = true
    spike2.lifetime = 2;
    spikeGroup.add(spike2);

    var spike2_ = createSprite(480, 320);
   // var i = loadImage("spike.svg");
    spike2_.addImage("Image Of The Deadly Spike", i);
    spike2_.scale = 0.6;
    // spike.debug = true
    // player.debug = true
    //this.spike.debug = true
    spike2_.lifetime = 2;
    spikeGroup.add(spike2_);

    var spike22 = createSprite(630, 320);
   // var i = loadImage("spike.svg");
    spike22.addImage("Image Of The Deadly Spike", i);
    spike22.scale = 0.6;
    // spike.debug = true
    // player.debug = true
    //this.spike.debug = true
    spike22.lifetime = 2;
    spikeGroup.add(spike22);

    var spike_2 = createSprite(780, 320);
   // var i = loadImage("spike.svg");
    spike_2.addImage("Image Of The Deadly Spike", i);
    spike_2.scale = 0.6;
    // spike.debug = true
    // player.debug = true
    //this.spike.debug = true
    spike_2.lifetime = 2;
    spikeGroup.add(spike_2);

  //   var spike2 = createSprite(170, 320);
  //  // var i = loadImage("spike.svg");
  //   spike2.addImage("Image Of The Deadly Spike", i);
  //   spike2.scale = 0.6;
  //   // spike.debug = true
  //   // player.debug = true
  //   //this.spike.debug = true
  //   spike2.lifetime = 2;
  //   spikeGroup.add(spike2);

  //   var spikes2 = createSprite(920, 320);
  //  // var i = loadImage("spike.svg");
  //   spikes2.addImage("Image Of The Deadly Spike", i);
  //   spikes2.scale = 0.6;
  //   // spike.debug = true
  //   // player.debug = true
  //   //this.spike.debug = true
  //   spikes2.lifetime = 2;
  //   spikeGroup.add(spikes2);


    if (player.x < 20) {
      level = 3;
      player.x = 1000;
    }

    if (player.x > 1000) {
      level = 5;
      player.x = 100;
      player.y = 160;
    }
  }else if(level === 5){

    var spike = createSprite(innerWidth/2 - 370, 315);
    //var i = loadImage("spike.svg");
    spike.addImage("Image Of The Deadly Spike", reddy);
    spike.scale = 0.4;          
    // spike.debug = true
    // player.debug = true
    //this.spike.debug = true
    spike.lifetime = 2;
    spikeGroup.add(spike);

    var spikey = createSprite(innerWidth/2 - 30, 315);
    //var i = loadImage("spike.svg");
    spikey.addImage("Image Of The Deadly Spike", reddy);
    spikey.scale = 0.4;          
    // spike.debug = true
    // player.debug = true
    //this.spike.debug = true
    spikey.lifetime = 2;
    spikeGroup.add(spikey);

    if (player.x < 20) {
      level = 4;
      player.x = 1000;
    }
    if (player.x > 1000) {
      level = 6;
      player.x = 100;
      player.y = 160;
    }
  }else if(level === 6){
    var finale = createSprite((innerWidth/2 - 370, 715))
    finale.addImage(WHITEHAT)
    finale.y = sin(speed * 2) * 15 + 290
    finale.scale = 0.15
    if(player.isTouching(finale)){
      gameState = 1;
    }
    finale.lifetime = 2

    if(player.x > 985){
      player.x = 985
    }

    
  }

  player.collide(ground);
  //player.bounceOff(edges)

  //console
  //console.log(player.y);
  blockX(player, 15, 15);
  blockY(player, 5, 5);

  
  //console.log(jbb)

  drawSprites();

  if (level === 1) {
    push();
    fill("yellow");
    //stroke("blue");
    textSize(25);
    //strokeWeight(2);
    textFont("Calibri");
    text("You Are On A Mission To Find The Anicient White Hat", 200, 100);
    text("You Have To Find It", 340, 130);
    text("Beware Of Spikes", 350, 160);
    pop();
    imageMode(CENTER)
    image(ak,102,260,70,70)
    image(ar,50,320,50,50)
  }else if(level === 2){
    push();
    fill("yellow");
    //stroke("blue");
    textSize(25);
    //strokeWeight(2);
    textFont("Calibri");
    //text("You Are On A Mission To Find The Anicient White Hat", 200, 100);
    text("Too Many Spikes?", 340, 130);
    //text("Beware Of Spikes", 350, 160);
    pop();
    imageMode(CENTER)
    image(ak,102,260,70,70)
    image(ar,50,320,50,50)
  }else if(level === 3){
    push();
    fill("yellow");
    //stroke("blue");
    textSize(25);
    //strokeWeight(2);
    textFont("Calibri");
    //text("You Are On A Mission To Find The Anicient White Hat", 200, 100);
    text("Wow! A Jump Boost", 340, 70);
    text("Press The ⬆ Arrow Multiple Times To Use It", 250, 100);
    pop();
    imageMode(CENTER)
    image(ak,102,260,70,70)
    image(ar,50,320,50,50)
  }else if(level === 4){
    push();
    fill("yellow");
    //stroke("blue");
    textSize(25);
    //strokeWeight(2);
    textFont("Calibri");
    //text("You Are On A Mission To Find The Anicient White Hat", 200, 100);
    text("Feeling Like A Ninja?", 340, 70);
    //text("Beware Of Spikes", 350, 160);
    pop();
    // imageMode(CENTER)
    // image(ak,102,260,70,70)
    // image(ar,50,320,50,50)
  }else if(level === 5){
    push();
    fill(0);
    //stroke("blue");
    textSize(25);
    //strokeWeight(2);
    textFont("Calibri");
    //text("You Are On A Mission To Find The Anicient White Hat", 200, 100);
    text("Looks Like A Forest...", 340, 130);
    text("Beware Of Tribals", 350, 160);
    pop();
    imageMode(CENTER)
    image(ak,102,260,70,70)
    image(ar,50,320,50,50)
  }else if(level === 6){
    push();
    fill(255);
    //stroke("blue");
    textSize(25);
    //strokeWeight(2);
    textFont("Calibri");
    text("Looks Like U Found The Ancient White Hat ", 200, 140);
     text("Now Go, Get It!", 340, 170);
    // text("Beware Of Spikes", 350, 160);
    pop();
    imageMode(CENTER)
    image(ak,102,260,70,70)
    image(ar,50,320,50,50)
  }
  //console.log(gameState)
}else{
  background(0)
  imageMode(CENTER)
  image(yw,475,200,600,200)
  image(main,920,320,100,100)
  
  //loopy()
}
} //Draw Ends


//Function keyPressed
function keyPressed() {
  //jump when the space key or the up key is pressed
  if (level === 1 || level == 2) {
    if ((keyCode === 32 || keyCode === 38) && player.y > 321) {
      //&&player.y>321
      player.velocityY = -13;
    }
  } else if (level >= 3 && level < 5) {
    if ((keyCode === 32 || keyCode === 38) && player.y > 140) {
      //&&player.y>321
      player.velocityY = -13;
    }
  }else if(level >= 5){
    if (((keyCode === 32 || keyCode === 38))&&player.y>321) {
      //
      player.velocityY = -17;
    }
  }
}


//function blockX
function blockX(e, t, r) {
  if (e.x < t) {
    e.x = r;
  }
}

//function blockY
function blockY(e, t, r) {
  if (e.y < t) {
    e.y = r;
  }
}

//function die
function die(e) {
  if (player.isTouching(e)) {
    player.x = 100;
    player.y = 160;
  }
}

//  function loopy(){
//    if(gameState===0){
//   cool = loadSound("bad.mp3")}else{
//   cool = load
//   }
// }