var ball,database,position,ball2;
var w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w17,w18,w19,w20

function setup(){
    database = firebase.database()
    createCanvas(500,500);
    ball = createSprite(240,250,10,10);
    ball.shapeColor = "red"

 
 
var location = database.ref("ball/position");
location.on("value",readPosition,error);
   

ball2 = createSprite(260,250,10,10);
ball2.shapeColor = "blue"

w1 = createSprite(200,350,20,260)
w1.shapeColor = "white"
w2 = createSprite(240,210,100,20)
w2.shapeColor = "white"
w3 = createSprite(300,350,20,300)
w3.shapeColor = "white"
w4 = createSprite(230,300,50,20)
w4.shapeColor = "white"
w5 = createSprite(270,350,50,20)
w5.shapeColor = "white"
w6 = createSprite(230,400,50,20)
w6.shapeColor = "white"
w7 = createSprite(270,480,50,20)
w7.shapeColor = "white"
w8 = createSprite(220,100,500,20)
w8.shapeColor = "white"
w9 = createSprite(350,150,20,100)
w9.shapeColor = "white"
w10 = createSprite(390,200,100,20)
w10.shapeColor = "white"        

w11 = createSprite(120,350,150,20)
w11.shapeColor = "white"
w12 = createSprite(80,300,160,20)
w12.shapeColor = "white"
w13 = createSprite(100,180,20,150)
w13.shapeColor = "white"
w14 = createSprite(350,330,20,20)
w14.shapeColor = "white"
w15 = createSprite(400,330,20,20)
w15.shapeColor = "white"
w16 = createSprite(450,330,20,20)
w16.shapeColor = "white"
w17 = createSprite(450,280,20,20)
w17.shapeColor = "white"
w18 = createSprite(400,280,20,20)
w18.shapeColor = "white"
w19 = createSprite(350,280,20,20)
w19.shapeColor = "white"
w20 = createSprite(400,400,100,20)
w20.shapeColor = "white"        


var location2 = database.ref("ball2/position2");
location2.on("value",readPosition2,error2);

}

function draw(){
    background("black");
    
    if(keyDown(LEFT_ARROW)){
        writePosition(-4,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(4,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-4);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+4);
    }

    if(keyDown("A")){
        posBall(-4,0);
    }
    else if(keyDown("D")){
        posBall(4,0);
    }
    else if(keyDown("W")){
        posBall(0,-4);
    }
    else if(keyDown("S")){
        posBall(0,+4);
    }

   if (ball.isTouching(w1)){
      ball.x=240
      ball.y=250
   }

   if (ball.isTouching(w2)){
    ball.x=240
    ball.y=250
 }
 if (ball.isTouching(w3)){
    ball.x=240
    ball.y=250
 }
 if (ball.isTouching(w4)){
    ball.x=240
    ball.y=250
 }
 if (ball.isTouching(w5)){
    ball.x=240
    ball.y=250
 }
 if (ball.isTouching(w6)){
    ball.x=240
    ball.y=250
 }
 if (ball.isTouching(w7)){
    ball.x=240
    ball.y=250
 }
 if (ball.isTouching(w8)){
    ball.x=240
    ball.y=250
 }
 if (ball.isTouching(w9)){
    ball.x=240
    ball.y=250
 }
 if (ball.isTouching(w10)){
    ball.x=240
    ball.y=250
 }
 if (ball.isTouching(w11)){
    ball.x=240
    ball.y=250
 }
 if (ball.isTouching(w12)){
    ball.x=240
    ball.y=250
 }
 if (ball.isTouching(w13)){
    ball.x=240
    ball.y=250
 }
 if (ball.isTouching(w14)){
    ball.x=240
    ball.y=250
 }
 if (ball.isTouching(w15)){
    ball.x=240
    ball.y=250
 }
 if (ball.isTouching(w16)){
    ball.x=240
    ball.y=250
 }
 if (ball.isTouching(w17)){
    ball.x=240
    ball.y=250
 }
 if (ball.isTouching(w18)){
    ball.x=240
    ball.y=250
 }
 if (ball.isTouching(w19)){
    ball.x=240
    ball.y=250
 }
 if (ball.isTouching(w20)){
    ball.x=240
    ball.y=250
 }

 if (ball.isTouching(w1)){
    ball.x=260
    ball.y=250
 }

 if (ball.isTouching(w2)){
  ball.x=260
  ball.y=250
}
if (ball.isTouching(w3)){
  ball.x=260
  ball.y=250
}
if (ball.isTouching(w4)){
  ball.x=260
  ball.y=250
}
if (ball.isTouching(w5)){
  ball.x=260
  ball.y=250
}
if (ball.isTouching(w6)){
  ball.x=260
  ball.y=250
}
if (ball.isTouching(w7)){
  ball.x=260
  ball.y=250
}
if (ball.isTouching(w8)){
  ball.x=260
  ball.y=250
}
if (ball.isTouching(w9)){
  ball.x=260
  ball.y=250
}
if (ball.isTouching(w10)){
  ball.x=260
  ball.y=250
}
if (ball.isTouching(w11)){
  ball.x=260
  ball.y=250
}
if (ball.isTouching(w12)){
  ball.x=260
  ball.y=250
}
if (ball.isTouching(w13)){
  ball.x=260
  ball.y=250
}
if (ball.isTouching(w14)){
  ball.x=260
  ball.y=250
}
if (ball.isTouching(w15)){
  ball.x=260
  ball.y=250
}
if (ball.isTouching(w16)){
  ball.x=260
  ball.y=250
}
if (ball.isTouching(w17)){
  ball.x=260
  ball.y=250
}
if (ball.isTouching(w18)){
  ball.x=260
  ball.y=250
}
if (ball.isTouching(w19)){
  ball.x=260
  ball.y=250
}
if (ball.isTouching(w20)){
  ball.x=260
  ball.y=250
}


    drawSprites();
}



function writePosition(x,y){
database.ref("ball/position").set({
x: position.x+x,
y: position.y+y
})

}
function readPosition(data){
  position = data.val();

  ball.x = position.x
  ball.y = position.y
}



function error(){
    console.log(eroor)
}

function posBall(x,y){
    database.ref("ball2/position2").set({
        x: position2.x+x,
        y: position2.y+y
       
    })
}


function readPosition2(Data){
position2 = Data.val();

ball2.x = position2.x;
ball2.y = position2.y;


}
function error2(){
    console.log("hi")
}
