//alert
var blockbg = 40;

var count1 = 0;
var alert_camera;
var alert_glass;

var ok_active;
var ok_down;


var alert_camera_status = 0;
var alert_glass_status = 0;
var alert_time_status = 0;

var alert_glass_once = 0


function alert_camera_show(){
	count1++;
  if (count1 == 100) {
    alert_camera_status = 1;
  }
}

function alert_glass_show(){
	if(alltxt.length == 5 ){
		alert_glass_status = 1;
	}
}

function alert_camera_happen(){
	if (alert_camera_status == 1) {
    fill(0, 0, 0, blockbg);
    rect(0,0,1057,860);
    image(alert_camera, 500, 300, 420, 295);
    image(ok_down, 650, 500, 105, 40);
    if (mouseX > 650 && mouseX < 750 && mouseY > 500 && mouseY < 540) {
      image(ok_active, 650, 500, 105, 40);
      if (mouseIsPressed) {
        //image(bg_default,0,0,1057,860);
        alert_camera_status = 0;
        currentstatus = 1;
      }
    }
  }
}

function alert_glass_happen(){
	if (alert_glass_status == 1 && !alert_glass_once) {
		blockbg = 40;
    fill(0, 0, 0, blockbg);
    rect(0,0,1057,860);
    image(alert_glass, 500, 300, 420, 295);
    image(ok_down, 650, 500, 105, 40);
    if (mouseX > 650 && mouseX < 750 && mouseY > 500 && mouseY < 540) {
      image(ok_active, 650, 500, 105, 40);
      if (mouseIsPressed) {
        //image(bg_default,0,0,1057,860);
        alert_glass_once = 1;
        currentstatus = 2;
      }
    }
  }
}
