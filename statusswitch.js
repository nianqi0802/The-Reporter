//status
var camera_active;
var camera_down;
var glass_active;
var glass_down;
var time_active;
var time_down;

//tool bar
function switchstatus(){
  noStroke();
  fill(30, 30, 30, 50);
  rect(0, bar_bg_p, 1057, 60);


  //status1: camera status
  if (currentstatus == 1) {
    image(camera_active, 30, bar_bg_p - 40, 145, 110);
    image(glass_down, 175, bar_bg_p - 40, 163, 110);
    image(time_down, 338, bar_bg_p - 40, 117, 110);

    //focus square following the mouse
    noFill();
    stroke(255);
    let focusx = constrain(mouseX-120,0,915);
    let focusy = mouseY-70;
    rect(focusx, focusy, 140, 90);
  }

  //status2: glass status
  else if (currentstatus == 2) {
    image(camera_down, 30, bar_bg_p - 40, 145, 110);
    image(glass_active, 175, bar_bg_p - 40, 163, 110);
    image(time_down, 338, bar_bg_p - 40, 117, 110);

    //zoom in ellipse
    noFill();
    stroke(255);
    strokeWeight(1);
    let zoominx = constrain(mouseX-30,0,950);
    ellipse(zoominx, mouseY - 30, 140);
    line(zoominx -20, mouseY - 30, zoominx +20, mouseY - 30);
    if(scene ==1){
    line(zoominx , mouseY - 50, zoominx , mouseY - 10);
  }
  }

  //status3: time status
  else if (currentstatus == 3) {
    image(camera_down, 30, bar_bg_p - 40, 145, 110);
    image(glass_down, 175, bar_bg_p - 40, 163, 110);
    image(time_active, 338, bar_bg_p - 40, 117, 110);
  }

  //switch status

  if (mouseX > 0 && mouseX < 175 && mouseY > 750 || alert_camera_status == 1) {
    image(camera_active, 30, bar_bg_p - 40, 145, 110);
    image(glass_down, 175, bar_bg_p - 40, 163, 110);
    image(time_down, 338, bar_bg_p - 40, 117, 110);
    if (mouseIsPressed) {
      currentstatus = 1;
    }
  }


  if (mouseX > 175 && mouseX < 338 && mouseY > 750) {
    if (alert_glass_status) {
      image(camera_down, 30, bar_bg_p - 40, 145, 110);
      image(glass_active, 175, bar_bg_p - 40, 163, 110);
      image(time_down, 338, bar_bg_p - 40, 117, 110);
      if (mouseIsPressed) {
        currentstatus = 2;
      }
    } else if (!alert_glass_status) {
      noStroke();
      fill(255);
      textAlign(LEFT);
      text('LOCKED', 250, 760);
    }
  }

  if (mouseX > 338 && mouseX < 700 && mouseY > 750) {
    if (alert_time_status) {
      image(camera_down, 30, bar_bg_p - 40, 145, 110);
      image(glass_down, 175, bar_bg_p - 40, 163, 110);
      image(time_active, 338, bar_bg_p - 40, 117, 110);
      if (mouseIsPressed) {
        currentstatus = 3;
        console.log(currentstatus);
      }
    } else if (!alert_time_status) {
      noStroke();
      fill(255);
      textAlign(LEFT);
      text('LOCKED', 370, 760);
    }
  }

  //get out
  if (mouseY > 800 || alert_camera_status == 1) {
    bar_bg_p -= toolshow;
    if (bar_bg_p <= 800) {
      bar_bg_p = 800;
    }
  } else if (mouseY > 0 && mouseY < 800) {
    bar_bg_p += toolshow;
    if (bar_bg_p > 880) {
      bar_bg_p = 880;
    }

  }
}
