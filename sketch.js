const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var wall1,wall2,wall3,wall4,particle,division1,division2,division3;
var plinko1,plinko2,plinko3,plinko4,plinko5,plinko6,plinko7,plinko8,plinko9,plinko10;
var plinko11,plinko12,plinko13,plinko14,plinko15,plinko16,plinko17,plinko18;
var particles=[];
var gameState="start";

function setup(){
    createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    wall1 = new Wall(300,height-20,600,20);
    wall2 = new Wall(300,0,600,20);
    wall3 = new Wall(width,300,20,600);
    wall4 = new Wall(0,300,20,600);

    division1=new Division(width/4,500,10,200);
    division2=new Division(width/2,500,10,200);
    division3=new Division(450,500,10,200);

    plinko1=new Plinko(60,150,20);
    plinko2=new Plinko(150,150,20);
    plinko3=new Plinko(240,150,20);
    plinko4=new Plinko(330,150,20);
    plinko5=new Plinko(420,150,20);
    plinko6=new Plinko(510,150,20);

    plinko7=new Plinko(60,250,20);
    plinko8=new Plinko(150,250,20);
    plinko9=new Plinko(240,250,20);
    plinko10=new Plinko(330,250,20);
    plinko11=new Plinko(420,250,20);
    plinko12=new Plinko(510,250,20);

    plinko13=new Plinko(60+45,200,20);
    plinko14=new Plinko(150+45,200,20);
    plinko15=new Plinko(240+45,200,20);
    plinko16=new Plinko(330+45,200,20);
    plinko17=new Plinko(420+45,200,20);
}

function draw(){
    background("white");
    Engine.update(engine);
    wall4.display();
    wall3.display();
    wall2.display();
    wall1.display();

    division1.display();
    division2.display();
    division3.display();
    

    plinko1.display();
    plinko2.display();
    plinko3.display();
    plinko4.display();
    plinko5.display();
    plinko6.display();
    plinko7.display();
    plinko8.display();
    plinko9.display();
    plinko10.display();
    plinko11.display();
    plinko12.display();
    plinko13.display();
    plinko14.display();
    plinko15.display();
    plinko16.display();
    plinko17.display();
 
    if(frameCount%40===0){
          particle=new Particle(Math.random(300,300),25,10)
          particles.push(new Particle(Math.random(300, 300), 10,10));
         
      }

      if(particles!=null){
        for (var j = 0; j < particles.length; j++) {
            particles[j].display();
          }
        if (particles.position.x>width/4) {
          if (particles.position.y>500) {
            score=score+100;
            particles=null;
            if(count=5){gameState="end"}
          }
        }
      }
}

function Particles(){
    if(frameCount%40===0){
        particles.push(new Particle(Math.random(300, 300), 10,10));
    }
}