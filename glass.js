var people;
var showPeople = false;

var house;
var showHouse = false;

var construction;
var showConstruction = false;

var court;
var showCourt = false;


function glass_circle(){
  //button 1 people
  stroke(179, 130, 62);
  strokeWeight(2);
  //fill(30, 30, 30, 50);
  //ellipse(265, 335, 90, 90);


  //button 2 house

  fill(30, 30, 30, 50);
  ellipse(485, 330, 120, 120);


  //button 3 court

  fill(30, 30, 30, 50);
  ellipse(910, 250, 290, 290);

  //button 4 construction

  // fill(30, 30, 30, 50);
  // ellipse(880, 730, 300, 300);
}

function glass_zoom(){
  if(mouseIsPressed){
    //people
  var d1 = dist(mouseX, mouseY, 265, 335);
  //house
  var d2 = dist(mouseX, mouseY, 480, 330);
  //court
  var d3 = dist(mouseX, mouseY, 910, 250);
  //construction
  var d4 = dist(mouseX, mouseY, 880, 730);


  if (showPeople || showHouse || showCourt || showConstruction) {
    showPeople = false
    showHouse = false
    showCourt = false
    showConstruction = false
  } else if (d1 < 45) {
    if (showHouse == false && showCourt == false && showConstruction == false) {
      showPeople = true
    }
  } else if (d2 < 60) {
    if (showPeople == false && showCourt == false && showConstruction == false) {
      showHouse = true
    }
  } else if (d3 < 145) {
    // print(showHouse)
    if (showPeople == false && showHouse == false && showConstruction == false) {
      showCourt = true
    }
  } else if (d4 < 150) {
    if (showPeople == false && showHouse == false && showCourt == false) {
      showConstruction = true
    }
  }
  }

  // if (showPeople) {
  //   image(people, 0, 0, 1057, 860);
  //   fadeIn(people, 50);
  //   fadeOut(bg_default, -50);
  //
  // } else {
  //   fadeIn(bg_default, 50);
  //   fadeOut(people, -50);
  // }

  if (showHouse) {
    image(house, 0, 0, 1057, 860);
    fadeIn(house, 50);
    fadeOut(bg_default, -50);
    scene =2;
  } else {
    fadeIn(bg_default, 50);
    fadeOut(house, -50);

  }

  // if (showConstruction) {
  //   image(construction, 0, 0, 1057, 860);
  //   fadeIn(construction, 50);
  //   fadeOut(bg_default, -50);
  // } else {
  //   fadeIn(bg_default, 50);
  //   fadeOut(construction, -50);
  // }


  if (showCourt) {
    image(court, 0, 0, 1057, 860);
    fadeIn(court, 50);
    fadeOut(bg_default, -50);
    scene =3;
  } else {
    fadeIn(bg_default, 50);
    fadeOut(court, -50);
  }

}
