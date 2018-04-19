// Rover Object Goes Here
// ======================
var roverObject = {
  direction: "N",
  x: 0,
  y: 0,
  travellog: []
};

//Bonus: Obstacles locations for the Rover.
var roverObstacles = {
  x: [1, 1, 4, 3, 2],
  y: [0, 1, 3, 2, 9]
};


//    
//   [r, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, X, 0, 0, 0, 0, 0, 0, 0]
//
// Grid Visual: r - Rover, 1 - Obstacle, 0 - Empty Space

// Welcome Message

console.log(
  "Welcome to the Mars Rover App. Please use the 'command()' function with either 'l' , 'r', 'f', or 'b' as arguments to move the rover."
);



// ======================
function turnLeft(){
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
  }
  console.log("turnLeft was called! Current direction is " + rover.direction);
}

function turnRight() {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
    break;
  }
  console.log("turnRight was called! The current location of the Rover is " + rover.direction);
}

function moveForward() {
  console.log("moveForward was called");

  if(rover.direction === "N" && rover.y > 0){
    rover.y += -1;
    
    if(Obstacles())rover.y+= 1;
  } else if(rover.direction === "E" && rover.x < 10){
    rover.x += 1;
    
    if(Obstacles())rover.x+= -1;
  } else if(rover.direction === "S" && rover.y < 10){
    rover.y+=1;
    
    if(Obstacles())rover.y+= -1;
  } else if(rover.direction === "W" && rover.x > 0){
    rover.x += -1;
    
    if(Obstacles())rover.x+= 1;
  } else{
    console.log("You must stay within the 10x10 grid! Position: " + rover.x + ", " + rover.y);
  } 
    rover.travelLog.push("(" + rover.x + ", " + rover.y + ")");
}

// Bonus: moveBackwards

function moveBackward(){
  console.log("moveBackward was called");
  
  if(rover.direction === "N" && rover.y < 10){
    rover.y += 1;
   
    if(obstacles())rover.y+= -1;
  } else if(direction === "E" && rover.x > 0 ){
    rover.x += -1;
    
    if(obstacles())rover.x+= 1;
  } else if(direction === "S" && rover.y > 0){
    rover.y+= -1;
    
    if(obstacles())rover.y+= 1;
  } else if(direction === "W" && rover.x < 10){
    rover.x += 1;
    
    if(obstacles())rover.x+= -1;
  } else{
    console.log("You must stay within the 10x10 grid! Position: " + rover.x + ", " + rover.y);
  }
    rover.travelLog.push("(" + rover.x + ", " + rover.y + ")");
}

// Command function

function command(str){
  
  for(var i = 0; i < str.length; i++){
    if(str[i] !== "l" && str[i] !== "r" && str[i] !== "f" && str[i] !== "b"){
      return "The command string has an invalid input. Please use only 'l', 'r', 'f', or 'b'.";
    }
  } 
    for(i = 0; i < str.length; i++){
    switch (str[i]) {
      case 'l':
        turnLeft();
        break;
      case 'r':
        turnRight();
        break;
      case 'f':
        moveForward();
        break;
      case 'b':
        moveBackward();
        break;
    }
  } console.log(rover.travelLog);
}

// ======================

// Obstacles Function

function obstacles(){
  //iterate through obstacles aray to check x,y coordinates of obstacles
  for(var j = 0; j < obstacles.x.length; j++){
    //check to see if rover x,y is same as obstacle x,y. If true, you will hit obstacle.
    if(rover.x === obstacles.x[j] && rover.y === obstacles.y[j]){
      console.log("you are about to hit an obstacle");
      return true;
    }
  } return false;
}