const engine=Matter,Engine;
const world=Matter,world;
const Bodies=Matter,bodies;
const constraint=Matter,constraint;

var engine,world;

function set(){
creatCanvas(800,400);

engine = Engine.create();
world = engine.world;

box1= new BlueBox(500,360,20,30);
box2= new GreenBox(520,360,20,30);
box3= new YellowBox(540,360,20,30);
box4= new RedBox(560,360,20,30);
box5= new BlueBox(580,360,20,30);
box6= new GreenBox(600,360,20,30);

box7= new RedBox(510,330,20,30);
box8= new GreenBox(530,530,20,30);
box9= new BlueBox(550,530,20,30);
box10=new YellowBox(570,530,20,30); 
box11= new RedBox(590,530,20,30);

box12= new greenbox(520,310,20,30);
box13= new YellowBox(540,310,20,30);
box14= new RedBox(560,310,20,30);
box15= new BlueBox(580,310,20,30);

box16= new GreenBox(530,280,20,30);
box17= new RedBox(550,310,20,30);
box18= new BlueBox(570,310,20,30);

box19= new YellowBox(540,250,20,30);
box20= new Greenbox(560,250,20,30);

box21= new RedBox(550,220,20,30);

box22= new BlueBox(500,135,20,30);
box23= new GreenBox(520,135,20,30);
box24= new YellowBox(540,135,20,30);
box25= new BlueBox(560,135,20,30);
box26= new Redbox(580,135,20,30);
box27= new greenbox(600,135,20,30);

box28= new BlueBox(510,105,20,30);
box29= new YellowBox(530,310,20,30);
box30= new GreenBox(550,310,20,30);
box31= new RedBox(570,310,20,30);
box32= new BlueBox(590,310,20,30);

box33= new Greenbox(510,75,20,30);
box34= new RedBox(530,75,20,30);
box35= new YellowBox(550,75,20,30);
box36= new BlueBox(570,75,20,30);

box37= new greenbox(520,45,20,30);
box38= new RedBox(520,45,20,30);
box39= new YellowBox(520,45,20,30);

ball=new ball(0,0,50);

spring=new Projectile(boll.body,{x:200,y:200});

ground=new platform(400,300,800,20);

groundHovering=new Platfoem(550,160,200,20);

}

function draw() {
    background(247,223,178);
    Engine.update(engine);

     debug:true;

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display(); 
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  
  ball.display();
  spring.display();
  ground.display();
  groundHovering.display();

}

function moveroagged(){
    Matter.body.setPoition(boll.body,{x:mouseX,ymouseY})
}

function moverRrleased(){
spring.release();
}