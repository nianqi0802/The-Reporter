var title1 = '"NAIL HOUSE" ASKING PRICE OF TWENTY MILLION TO MOVE OUT';
var title2 = 'CHINESE COUPLES TEST THE PROPERTY LAW';

var titles =[title1,title2];

var timeinfo1 = 'March 9,2007 Chongqing,China';
var timeinfo2 = 'March 22,2007 Choingqing, China';

var timeinfos =[timeinfo1,timeinfo2];

function titleshow(t){
  	textSize(20);
  	fill(40);
    if(alltxt.length>=7)fill('#9C5A0A');
  	noStroke();
  	//stroke('#b3823e');
  	textAlign(CENTER);
  	text(t,1090,40,300,100);
}

function timeshow(t){
  textSize(12);
  fill(40);
  noStroke();
  textAlign(CENTER);
  text(t,1090,135,300,40);
}
