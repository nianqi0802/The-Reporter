var bg_default;
var newspaper_1;
var newspaper_2;

var ourfont;

var currentstatus = 0; //1= camera, 2 = glass, 3 = time

//tool
var toolshow = 20;
var bar_bg_p = 860;

var fade = 255;

var scene = 1; // 0 = big scene

var canvas;

var bgmusic;
var cameramusic;


function preload() {
  ourfont = loadFont('TpldKhangXiDictTrial.otf');

  bg_default = loadImage('asset/background/bg_default.jpg');
  newspaper_1 = loadImage('asset/background/newspaer_1.jpg ');
  newspaper_2 = loadImage('asset/background/newspaer_2.jpg ');

  camera_active = loadImage('asset/camera.png ');
  camera_down = loadImage('asset/camera_down.png ');
  glass_active = loadImage('asset/glass.png ');
  glass_down = loadImage('asset/glass_down.png ');
  time_active = loadImage('asset/time.png ');
  time_down = loadImage('asset/time_down.png ');

  alert_camera = loadImage('asset/alert_camera.png');
  alert_glass = loadImage('asset/alert_glass.png');

  ok_active = loadImage('asset/ok_active.png ');
  ok_down = loadImage('asset/ok_down.png ');

  s1_resident = loadImage('asset/scene/01residents.jpg');
  s1_construction = loadImage('asset/scene/02construction.jpg');
  s1_gov = loadImage('asset/scene/03gov.jpg');
  s1_house = loadImage('asset/scene/04house.jpg');

  people = loadImage('asset/scene2/people.png ');
  house = loadImage('asset/scene2/house.jpg ');
  court = loadImage('asset/scene2/court.jpg ');
  construction = loadImage('asset/scene2/construction.png ');

  s2_house = loadImage('asset/06house.jpg ');
  s3_court = loadImage('asset/05court.jpg ');

  bgmusic = loadSound('asset/chongqing2.m4a');
  //cameramusic = loadSound('asset/camerae.m4a');

}

function setup() {
  bgmusic.setVolume(0.1);
  bgmusic.play();
  canvas = createCanvas(1440, 860);
  canvas.position(0,20);
  textFont(ourfont);
  image(newspaper_2, 1055, 170, 383, 690);

  // set the dots of first scene
  dots[0] = new Dots(267, 290, 255);
  dots[1] = new Dots(848, 677, 255);
  dots[2] = new Dots(922, 150, 255);
  dots[3] = new Dots(519, 156, 255);
  dots[4] = new Dots(345, 345, 255);
  dots[5] = new Dots(626, 270, 255);

  //photos of scene one
  s1_photos = [s1_resident, s1_construction, s1_gov, s1_house,s3_court,s2_house]

  //words of scene one
  for (let i of s1_txt0) {
    s1_txt0s = concat(s1_txt0, splitTokens(i));
  }
  for (let i of s1_txt1) {
    s1_txt1s = concat(s1_txt1, splitTokens(i));
  }
  for (let i of s1_txt2) {
    s1_txt2s = concat(s1_txt2, splitTokens(i));
  }
  for (let i of s1_txt3) {
    s1_txt3s = concat(s1_txt3, splitTokens(i));
  }

  for (let i of s3_txt) {
    s3_txts = concat(s3_txt, splitTokens(i));
  }

  for (let i of s2_txt) {
    s2_txts = concat(s2_txt, splitTokens(i));
  }
}



function draw() {

  if (scene == 1) { // if in the scene 0
    image(bg_default, 0, 0, 1057, 860); //place scene
    if (!alert_camera_status && currentstatus == 1 ) {
      for (let i = 0; i < 4; i++) {

        if (dots[i].near()) { //if click sth
          photoshow(s1_photos[i]); // show that photos
          dots[i].disappear();
          txtout =i;// show that words
        }
        dots[i].show(); //show the dots in s1
      }
    }
    if(currentstatus ==2){
      glass_circle();
      glass_zoom();
    }
  }
  if(scene ==2){
    image(house, 0, 0, 1057, 860);
    if(currentstatus ==2 && mouseIsPressed && mouseY<800){
      scene =1;
    }
    if (!alert_camera_status && currentstatus == 1 ){
      if (dots[5].near()) { //if click sth
        photoshow(s1_photos[5]); // show that photos
        dots[5].disappear();
        txtout =5;// show that words
      }
    }
    dots[5].show();
  }
  if(scene ==3){
    image(court, 0, 0, 1057, 860);
    if(currentstatus ==2 && mouseIsPressed && mouseY<800){
      scene =1;
    }
    if (!alert_camera_status && currentstatus == 1 ){
      if (dots[4].near()) { //if click sth
        photoshow(s1_photos[4]); // show that photos
        dots[4].disappear();
        txtout =4;// show that words
      }

    }
    dots[4].show();
  }

  image(newspaper_1, 1055, 0, 383, 170);

  if(alltxt.length <7){
  titleshow(titles[0]);
  timeshow(timeinfos[0]);
}

  if(alltxt.length == 7){
    titleshow(titles[1]);
    timeshow(timeinfos[1]);
  }

  alert_camera_show();
  alert_camera_happen();

  alert_glass_show(); // when four dots are unlocked, unlock the glass function
  alert_glass_happen(); // the alert get out

  switchstatus(); // the bar and status

	txtcomeout();

  //use for locating mouse
  //fill(0);
//  text('X' + mouseX, mouseX, mouseY);
  //text('Y' + mouseY, mouseX, mouseY + 20);
}
