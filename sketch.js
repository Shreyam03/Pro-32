const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var stand,stand2,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11;
var d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16;
var polygon,p_img;
var score=0;
var bg;
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    stand=new Ground(450,600,350,20);
    stand2=new Ground(900,350,400,20);
    //stand 1
    //1st row
    b1=new Box(450,560,50,50,"white");
    b2=new Box(500,560,50,50,"white");
    b3=new Box(550,560,50,50,"white");
    b4=new Box(400,560,50,50,"white");
    b5=new Box(350,560,50,50,"white");
    //2nd row
    b6=new Box(500,500,50,50,"purple");
    b7=new Box(400,500,50,50,"purple");
    b8=new Box(450,500,50,50,"purple");
    //3rd row
    b9=new Box(475,450,50,50,"blue");
    b10=new Box(425,450,50,50,"blue");
    //4th row
    b11=new Box(450,400,50,50,"yellow");
    //stand2
    //1st row
    d1=new Box(900,300,50,50,"red");
    d2=new Box(950,300,50,50,"red");
    d3=new Box(1000,300,50,50,"red");
    d4=new Box(850,300,50,50,"red");
    d5=new Box(800,300,50,50,"red");
    d6=new Box(750,300,50,50,"red");
    d7=new Box(1050,300,50,50,"red");
    //2nd row
    d8=new Box(900,250,50,50,"orange");
    d9=new Box(950,250,50,50,"orange");
    d10=new Box(1000,250,50,50,"orange");
    d11=new Box(850,250,50,50,"orange");
    d12=new Box(800,250,50,50,"orange");
    //3rd row
    d13=new Box(900,200,50,50,"white");
    d14=new Box(950,200,50,50,"white");
    d15=new Box(850,200,50,50,"white");
    //1st row
    d16=new Box(900,150,50,50,"yellow");

    polygon= new Polygon(100,100,50, "pink");
    slingshot=new SlingShot(polygon.body,{x:100,y:200});
    bg="cyan"
} 
function draw(){
    background(bg);
    Engine.update(engine);
    text("Score : "+score,750,40);
    stand.display();
    stand2.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    d1.display();
    d2.display();
    d3.display();
    d4.display();
    d5.display();
    d6.display();
    d7.display();
    d8.display();
    d9.display();
    d10.display();
    d11.display();
    d12.display();
    d13.display();
    d14.display();
    d15.display();
    d16.display();
    //score
    b1.score();
    b2.score();
    b3.score();
    b4.score();
    b5.score();
    b6.score();
    b7.score();
    b8.score();
    b9.score();
    b10.score();
    b11.score();
    d1.score();
    d2.score();
    d3.score();
    d4.score();
    d5.score();
    d6.score();
    d7.score();
    d8.score();
    d9.score();
    d10.score();
    d11.score();
    d12.score();
    d13.score();
    d14.score();
    d15.score();
    d16.score();
    
    polygon.display();
    slingshot.display();

    imageMode(CENTER);
    drawSprites();
}
function mouseDragged(){
   Matter.Body.setPosition(polygon.body, {x:mouseX, y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingshot.attach(polygon.body)
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "cyan"
    }
    else{
        bg = "black";
    }
    console.log(bg);
}