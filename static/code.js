var state = 0 // 0 - game is playing, 1 - game is stopped

      // Game code starts here
      var score = 0;
      var ctx = myCanvas.getContext("2d");

    var y_pos_av = 400;
    var x_pos_av = 400;
    var x_size_av = 70;
    var y_size_av = 70;
    var MyImg_av = new Image (); 
    MyImg_av.src = "static/images/avatar_png.png";           // the men 

    //Make fruits (and starting info)

    var y_pos_ban = 0;
    var x_pos_ban = 0;
    var speed_y_ban = 3;
    var speed_x_ban = 5;
    var x_size_ban = 80;
    var y_size_ban = 40;
    var y_pos_ap = 0;
    var x_pos_ap = 300;
    var speed_y_ap = 5;
    var speed_x_ap = 2;
    var x_size_ap = 40;
    var y_size_ap = 40;
    var y_pos_blu = 0;
    var x_pos_blu = 600;
    var speed_y_blu = 1;
    var speed_x_blu = 6;
    var x_size_blu = 42;
    var y_size_blu = 32;
    var y_pos_fr = 0;
    var x_pos_fr = 900;
    var speed_y_fr = 8;
    var speed_x_fr = 6;
    var x_size_fr = 60
    var y_size_fr = 60
    var MyImg_ban = new Image () ;
    MyImg_ban.src = "static/images/Banana_PNG_Clipart.png";
    var MyImg_ap = new Image();
    MyImg_ap.src = "static/images/apple.png";
    var MyImg_blu = new Image ();
    MyImg_blu.src = "static/images/blueberry.png"; 
    var MyImg_fr = new Image();
    MyImg_fr.src = "static/images/frambuesa.png";
  

    //Rectangle list
var rect_list = [[0, 80], [50, 80], [100, 80], [150, 80], [200, 80], [250, 80], [300, 80], [350, 80], [400, 80], [450, 80], [500, 80], [550, 80], [600, 80], [650, 80], [700,80], [750, 80], [800, 80], [850, 80], [900, 80], [950, 80], [1000,80], [1050,80]]

//Function that checks if two objects are touching

function ImagesTouching(x1, y1, x_size1, y_size1, x2, y2, x_size2, y_size2) {
          //
          // This function detects whether two images are touching - very useful function
          // 
          if (x1 >= x2+x_size2 || x1+x_size1 <= x2) return false;   // too far to the side
          if (y1 >= y2+y_size2 || y1+y_size1 <= y2) return false; // too far above/below
          return true;                                                    // otherwise, overlap   
          }


//Function what happens every frame

function MyTimer () {
  if (state==0){
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);


  //Change position of fruits, check if colliding with sides

  y_pos_ban = y_pos_ban + speed_y_ban;
  x_pos_ban = x_pos_ban + speed_x_ban;
  if (y_pos_ban>810 || y_pos_ban<0 ){
    speed_y_ban = -speed_y_ban
  }
  if (x_pos_ban>970 || x_pos_ban<0){
    speed_x_ban = -speed_x_ban
  } 

  y_pos_ap = y_pos_ap + speed_y_ap;
  x_pos_ap = x_pos_ap + speed_x_ap;
  if (y_pos_ap>810 || y_pos_ap<0 ){
    speed_y_ap = -speed_y_ap
  }
  if (x_pos_ap>970 || x_pos_ap<0){
    speed_x_ap = -speed_x_ap
  } 

  y_pos_blu = y_pos_blu + speed_y_blu;
  x_pos_blu = x_pos_blu + speed_x_blu;
  if (y_pos_blu>810 || y_pos_blu<0 ){
    speed_y_blu = -speed_y_blu
  }
  if (x_pos_blu>970 || x_pos_blu<0){
    speed_x_blu = -speed_x_blu
  } 

  y_pos_fr = y_pos_fr + speed_y_fr;
  x_pos_fr = x_pos_fr + speed_x_fr;
  if (y_pos_fr>810 || y_pos_fr<0 ){
    speed_y_fr = -speed_y_fr
  }
  if (x_pos_fr>970 || x_pos_fr<0){
    speed_x_fr = -speed_x_fr
  } 

  //Apple and banana touching
  if (ImagesTouching(x_pos_ap, y_pos_ap, x_size_ap, y_size_ap, x_pos_ban, y_pos_ban, x_size_ban, y_size_ban)){
    speed_x_ap = 10*Math.random()-5
    speed_y_ap = 10*Math.random()-5
    speed_x_ban = 16*Math.random()-8
    speed_y_ban = 16*Math.random()-8
  }

  //Apple and blueberry touching
  if (ImagesTouching(x_pos_ap, y_pos_ap, x_size_ap, y_size_ap, x_pos_blu, y_pos_blu, x_size_blu, y_size_blu)){
    speed_x_ap = 10*Math.random()-5
    speed_y_ap = 10*Math.random()-5
    speed_x_blu = 16*Math.random()-8
    speed_y_blu = 16*Math.random()-8
  }

  //Apple and frambuesa touching
if (ImagesTouching(x_pos_ap, y_pos_ap, x_size_ap, y_size_ap, x_pos_fr, y_pos_fr, x_size_fr, y_size_fr)){
    speed_x_ap = 10*Math.random()-5
    speed_y_ap = 10*Math.random()-5
    speed_x_fr = 16*Math.random()-8
    speed_y_fr = 16*Math.random()-8
  }

  //Apple and man touching
  if (ImagesTouching(x_pos_ap, y_pos_ap, x_size_ap, y_size_ap, x_pos_av, y_pos_av, x_size_av, y_size_av)){
    rect_list.push([1050*Math.random(), 850*Math.random()])
    x_pos_ap = 800*Math.random();
    y_pos_ap = 0;
    speed_x_ap = 10*Math.random()
    speed_y_ap = 10*Math.random()
    score = score +6; 
  }
 
  //Banana and frambuesa touching
if (ImagesTouching(x_pos_ban, y_pos_ban, x_size_ban, y_size_ban, x_pos_fr, y_pos_fr, x_size_fr, y_size_fr)){
    speed_x_ban = 10*Math.random()-5
    speed_y_ban = 10*Math.random()-5
    speed_x_fr = 16*Math.random()-8
    speed_y_fr = 16*Math.random()-8
  }

 //Banana and blueburry touching
 if (ImagesTouching(x_pos_ban, y_pos_ban, x_size_ban, y_size_ban, x_pos_blu, y_pos_blu, x_size_blu, y_size_blu)){
    speed_x_ban = 10*Math.random()-5
    speed_y_ban = 10*Math.random()-5
    speed_x_fr = 16*Math.random()-8
    speed_y_fr = 16*Math.random()-8
  }

  //Banana and Man touching
if (ImagesTouching(x_pos_ban, y_pos_ban, x_size_ban, y_size_ban, x_pos_av, y_pos_av, x_size_av, y_size_av)){
  rect_list.push([1050*Math.random(), 850*Math.random()])
    x_pos_ban = 800*Math.random();
    y_pos_ban = 0;
    speed_x_ban = 10*Math.random()
    speed_y_av = 10*Math.random()
    score = score +4; 
  }

  //Blueburry and frambuesa touching
 if (ImagesTouching(x_pos_blu, y_pos_blu, x_size_blu, y_size_blu, x_pos_fr, y_pos_fr, x_size_fr, y_size_fr)){
    speed_x_blu = 10*Math.random()-5
    speed_y_blu = 10*Math.random()-5
    speed_x_fr = 16*Math.random()-8
    speed_y_fr = 16*Math.random()-8
  }

//Blueberry and Man touching
if (ImagesTouching(x_pos_blu, y_pos_blu, x_size_blu, y_size_blu, x_pos_av, y_pos_av, x_size_av, y_size_av)){
  rect_list.push([1050*Math.random(), 850*Math.random()])
    x_pos_blu = 800*Math.random();
    y_pos_blu = 0;
    speed_x_blu = 10*Math.random()
    speed_y_av = 10*Math.random()
    score = score +8; 
  }

  //Frambuesa and Man touching
if (ImagesTouching(x_pos_fr, y_pos_fr, x_size_fr, y_size_fr, x_pos_av, y_pos_av, x_size_av, y_size_av)){
  rect_list.push([1050*Math.random(), 850*Math.random()])
    x_pos_fr = 800*Math.random();
    y_pos_fr = 0;
    speed_x_fr = 10*Math.random()
    speed_y_av = 10*Math.random()
    score = score +10; 
  }

  //Man touching black block
  for(rect of rect_list){
    if(ImagesTouching(rect[0], rect[1], 20, 20, x_pos_av, y_pos_av, x_size_av, y_size_av)){
      state = 1
      ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
      ctx.fillStyle= "red";
      ctx.font = "bold 50px Arial";                                   // say so
      ctx.textAlign="center";
      ctx.fillText("Game Over", myCanvas.width / 2, myCanvas.height / 2);
    }
  }




  // Draw fruits
  ctx.drawImage(MyImg_ban, x_pos_ban, y_pos_ban, x_size_ban, y_size_ban);
  ctx.drawImage(MyImg_ap, x_pos_ap, y_pos_ap, x_size_ap, y_size_ap);
  ctx.drawImage(MyImg_blu, x_pos_blu, y_pos_blu, x_size_blu, y_size_blu);
  ctx.drawImage(MyImg_fr, x_pos_fr, y_pos_fr, x_size_fr, y_size_fr);
  ctx.drawImage(MyImg_av, x_pos_av, y_pos_av, x_size_av, y_size_av);


  // Draw rectangles
  for( rect of rect_list){
    ctx.fillRect(rect[0], rect[1], 20, 20);
  }

  document.getElementById("score").innerHTML = score;
  document.getElementById("res").value = score;
  }
  }
  


  setInterval(MyTimer, 40);

  

  function MyKeyDownHandler (MyEvent) { 
   if (MyEvent.keyCode == 37 && x_pos_av > 0) {x_pos_av = x_pos_av - 10;}                          // left
   if (MyEvent.keyCode == 39 && x_pos_av+x_size_av < myCanvas.width) {x_pos_av = x_pos_av+10;}  // right
   if (MyEvent.keyCode == 38 && y_pos_av > 0) {y_pos_av = y_pos_av - 10;}                          // up
   if (MyEvent.keyCode == 40 && y_pos_av+y_size_av < myCanvas.width) {y_pos_av = y_pos_av+10;}  // down
   if (MyEvent.keyCode == 32) restart_game();                                             // blank space to restart 
  //  MyEvent.preventDefault();
   }

 addEventListener("keydown", MyKeyDownHandler);                      // listen for keystrokes  

function restart_game(){
  console.log("restart")
}

