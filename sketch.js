const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if (backgroundImg){
        background(backgroundImg);

    Engine.update(engine);

    

}

async function getBackgroundImg(){
    var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Tokyo');
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    if (hour > 0 && hour < 3){
        backgroundImg = loadImage("sunrise1.png");
        
    }
    if (hour > 2 && hour < 5){
        backgroundImg = loadImage("sunrise2.png");
        
    }
    if (hour > 4 && hour < 7){
        backgroundImg = loadImage("sunrise3.png");
        
    }
    if (hour > 6 && hour < 9){
        backgroundImg = loadImage("sunrise4.png");
        
    }
    if (hour > 8 && hour < 11){
        backgroundImg = loadImage("sunrise5.png");
        
    }
    if (hour > 12 && hour < 15){
        backgroundImg = loadImage("sunrise6.png");
        
    }
    if (hour > 14 && hour < 17){
        backgroundImg = loadImage("sunrise7.png");
        
    }
    if (hour > 16 && hour < 19){
        backgroundImg = loadImage("sunrise8.png");
        
    }
    if (hour > 18 && hour < 21){
        backgroundImg = loadImage("sunrise9.png");
        
    }
    if (hour > 20 && hour < 23){
        backgroundImg = loadImage("sunrise10.png");
        
    }
    if (hour > 22 && hour < 1){
        backgroundImg = loadImage("sunrise11.png");
        
    }
}
