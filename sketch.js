var food=0
var title,button,input;
var gameState=0


function preload(){
  cake = loadImage("cake 1.png")
  flour = loadImage("flour.png")
  sugar = loadImage("sugar.jpg")
  cocoapowder = loadImage("chocolate powder..png")
  bakingpowder = loadImage("baking powder.png")
  bakingsoda = loadImage("baking soda 1.png")
  salt = loadImage("salt.png")
  buttermilk =loadImage("butter milk.jpg")
  canolaoil  =loadImage("canola oil.jpg")
  vanillaextract = loadImage("vanilla extract.PNG")
  boilingwater = loadImage ("boilingwater.PNG")

kidneybeans = loadImage ("kidney beans.PNG")
onions = loadImage("onion.jpg")
garlic = loadImage("garlic 1.jpg")

  pbm = loadImage("pbm 2.png")
  taco=loadImage("taco 1.png")
  bg1=loadImage("formbg.jpg")
  bg2=loadImage("bg.jpg")
  l1=loadImage("list1.PNG")
  l2=loadImage("list2.PNG")
  l3=loadImage("list3.PNG")
}
function setup(){
  createCanvas(600,600)
  bg=createSprite(300,300,600,600)
  bg.addImage("a",bg1)
  bg.scale=0.5
  title=createElement('h2')
  title.html("COOKING FEVER")
  title.position(180,10)
  input=createInput('Enter Your Name')
  input.position(200,200)
  button=createButton('Start')
  button.position(250,250)
  greet= createElement('h3')
  food1=createSprite(200,200,10,10)
  food1.addImage(cake)
  food1.scale=0.1
  food1.visible=false
  food2=createSprite(200,320,10,10)
  food2.addImage(pbm)
  food2.scale=0.2
  food2.visible=false
  food3=createSprite(200,400,10,10)
  food3.addImage(taco)
  food3.scale=0.5
  food3.visible=false
  list1=createSprite(300,300)
  list1.visible=false
  list2=createSprite(300,300)
  list2.visible=false
  list3=createSprite(300,300)
  list3.visible=false
  ingredientsGroup=new Group()
  
}

function draw(){
  background("lightblue")
  if(gameState===0){
  button.mousePressed(()=> {
    input.hide()
    button.hide()
    var name = input.value()
    greet.html("Welcome "+name)
    greet.position(200,100)
    food1.visible = true
    food2.visible = true
    food3.visible = true
    gameState=1
  })
}
if(gameState===1){
 
  if(mousePressedOver(food1)){
    list1.visible=true
    list1.addImage(l1)
    playbutton()
    greet.hide()
    food=1
  }
  if(mousePressedOver(food2)){    
    list2.visible=true
    list2.addImage(l2)
    list2.scale=0.8
    playbutton()
    greet.hide()
    food=2
  }
  if(mousePressedOver(food3)){
    list3.visible=true
    list3.addImage(l3)
    list3.scale=0.7
    playbutton()
    greet.hide()
    food=3
  }
}
  if(gameState===2){
    greet.hide()
    startbutton.hide()
    bg.visible=true
    bg.addImage("b",bg2)
    bg.changeImage("b",bg2)
    bg.scale=2
    list1.visible=false
    list2.visible=false
    list3.visible=false
    if(food===1){
      spawningredients1()
    }
    if(food===2){
      spawningredients2()
    }
    if(food===3){
      spawningredients3()
    }
  }
  
  drawSprites();
}
function playbutton(){
  startbutton=createButton("PLAY")
  startbutton.position(450,450)
  startbutton.mousePressed(()=>{
    
    gameState=2
    food1.visible = false
    food2.visible = false
    food3.visible = false
  
  })

  
}


function spawningredients1(){
  if(frameCount % 60 === 0) {
    var ingredients = createSprite(random(100,500),5,10,40);
    //obstacle.debug = true;
    ingredients.velocityY = 6;
    
    //generate random obstacles
    var rand = Math.round(random(1,10));
    switch(rand) {
      case 1: ingredients.addImage(flour);
              ingredients.scale=0.3
              break;
      case 2: ingredients.addImage(sugar);
              ingredients.scale=0.4
              break;
      case 3: ingredients.addImage(cocoapowder);
      ingredients.scale=0.5
              break;
      case 4: ingredients.addImage(bakingpowder);
      ingredients.scale=0.5
              break;
      case 5: ingredients.addImage(bakingsoda);
      ingredients.scale=0.5
              break;
      case 6: ingredients.addImage(salt);
              ingredients.scale=0.3
              break;
      case 7: ingredients.addImage(buttermilk);
              ingredients.scale=0.2
              break;
      case 8: ingredients.addImage(canolaoil);
      ingredients.scale=0.4
              break;
      case 9: ingredients.addImage(vanillaextract);
      ingredients.scale=0.35
              break;
      case 10: ingredients.addImage(boilingwater);
      ingredients.scale=0.2
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
  
    ingredients.lifetime = 300;
    //add each obstacle to the group
    ingredientsGroup.add(ingredients);
  }

}

  function spawningredients2(){
    if(frameCount % 60 === 0) {
      var ingredients = createSprite(random(100,500),5,10,40);
      //obstacle.debug = true;
      ingredients.velocityY = 6;
      
      //generate random obstacles
      var rand = Math.round(random(1,10));
      switch(rand) {
        case 1: ingredients.addImage(kidneybeans);
                ingredients.scale=0.01
                break;
        case 2: ingredients.addImage(onions);
                ingredients.scale=0.01
                break;
        case 3: ingredients.addImage(garlic);
                break;
        case 4: ingredients.addImage();
                break;
        case 5: ingredients.addImage();
                break;
        case 6: ingredients.addImage(salt);
                ingredients.scale=0.1
                break;
        case 7: ingredients.addImage();
                ingredients.scale=0.01
                break;
        case 8: ingredients.addImage(canolaoil);
                break;
        case 9: ingredients.addImage();
                break;
        case 10: ingredients.addImage(boilingwater);
        ingredients.scale=0.1
                break;
        default: break;
      }
      
    ingredients.lifetime = 300;
    //add each obstacle to the group
    ingredientsGroup.add(ingredients);

    }
}


    function spawningredients3(){
      if(frameCount % 60 === 0) {
        var ingredients = createSprite(random(100,500),5,10,40);
        //obstacle.debug = true;
        ingredients.velocityY = 6;
        
        //generate random obstacles
        var rand = Math.round(random(1,10));
        switch(rand) {
          case 1: ingredients.addImage(flour);
                  ingredients.scale=0.01
                  break;
          case 2: ingredients.addImage(sugar);
                  ingredients.scale=0.01
                  break;
          case 3: ingredients.addImage(cocoapowder);
                  break;
          case 4: ingredients.addImage(bakingpowder);
                  break;
          case 5: ingredients.addImage(bakingsoda);
                  break;
          case 6: ingredients.addImage(salt);
                  ingredients.scale=0.1
                  break;
          case 7: ingredients.addImage(buttermilk);
                  ingredients.scale=0.01
                  break;
          case 8: ingredients.addImage(canolaoil);
                  break;
          case 9: ingredients.addImage(vanillaextract);
                  break;
          case 10: ingredients.addImage(boilingwater);
          ingredients.scale=0.1
                  break;
          default: break;
        }
        
    ingredients.lifetime = 300;
    //add each obstacle to the group
    ingredientsGroup.add(ingredients);
}
    }
    