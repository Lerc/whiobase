var dot ={x : 320, y:240};

var duck=loadImage("whio.png");

function move() {
  //37 is the key code of the left arrow key
  if ( keyIsDown(37) ) {
    dot.x-=1;
  }  

  //39 is the key code of the right arrow key
  if ( keyIsDown(39) ) {
    dot.x+=1;
  }
  
  //37 is the key code of the left arrow key
  if ( keyIsDown(38) ) {
    dot.y-=1;
  }  

  //39 is the key code of the right arrow key
  if ( keyIsDown(40) ) {
    dot.y+=1;
  }  
}


function draw() {
	clear();
	fillCircle(dot.x,dot.y,4);
}

run(move,draw);
