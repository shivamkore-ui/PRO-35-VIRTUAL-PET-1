const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dog, happyDog, database, foodStock, readStock
var engine, world
var happyDogImg, dogImg
var totalStock 

function writeStock() {
  totalStock -= 1
  database.ref('/').update({foodStock:totalStock})

}


function preload()
{
  happyDogImg = loadImage("images/dogImg1.png")
  dogImg = loadImage("images/dogImg.png")

}

function setup() {
	createCanvas(500, 500);

   var happyDog = createSprite()

  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value", readStock); 

	engine = Engine.create();
	world = engine.world;

  // dog = new Dog(250,340,250,250)

  dog = createSprite(250,340,250,250)
  dog.addImage(happyDogImg)
  dog.addImage(dogImg)
  dog.scale = 0.3

  Engine.run(engine);
  
}  

 function readStock(data){
  totalStock = data.val(); 
  console.log(data.val())
 }
function draw() {  
  background(46, 139, 87)
  
  if(keyWentDown(UP_ARROW)){
    //  writeStock();
      dog.addImage(happyDogImg)
  }


  drawSprites();
  // dog.display();
}

