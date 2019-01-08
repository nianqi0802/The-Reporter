var s1_txt0 = ['At this area of Hexing Rd, Jiulongpo Dist, Chongqing, 240 of the households all have been moved but Yangwu’s family. ']
var s1_txt1 = ['The construction work of Chongqing Nanlong Real Estate has been started, which is the project that responding to the call for the large-scale redevelopment of China.']
var s1_txt2 = ['According to the 20th Amendment of the Constitution of China: The state may, for the public interest, expropriate or take over land, and pay compensation in accordance with the law.']
var s1_txt3 = ['49 years old Wu Ping and her 51 years old husband Yang Wu lived in their two-storey house. '];

var s3_txt =['In China, social conflicts caused by levying activities are not rare. One of the root causes is the fuzzy definition of public interest in the expropriation system.The definition of compensation standard, quantification mechanism and judicial discretion of Property law of China are ambiguous.'];
var s2_txt =['Yangwu’s father owned this house nearly 40 years and he donated this house property to his son who is a Kung Fu master.'];



var s1_txt0s = [];
var s1_txt1s = [];
var s1_txt2s = [];
var s1_txt3s = [];

var s3_txts =[];
var s2_txts =[];

var alltxt = [''];
var showtxtnum = 0;
var lastshowtxtnum =0;

var s1_mousestatus = 100;

var txtbx = 1077;
var txtby = 385;

var txtout; // call the txtout


function txtcomeout(){
	if(txtout == 0 && s1_mousestatus!=0){
   	s1_mousestatus =0;
    alltxt.push(s1_txt0s);
    console.log(alltxt);
    showtxtnum++;
  }

  if(txtout == 1 && s1_mousestatus!=1){
   	s1_mousestatus =1;
    alltxt.push(s1_txt1s);
    showtxtnum++;
  }

  if(txtout == 2 && s1_mousestatus!=2){
   	s1_mousestatus =2;
    alltxt.push(s1_txt2s);
    showtxtnum++;
  }

  if(txtout == 3 && s1_mousestatus!=3){
   	s1_mousestatus =3;
    alltxt.push(s1_txt3s);
    showtxtnum++;
  }

	if(txtout == 4 && s1_mousestatus!=4){
   	s1_mousestatus =4;
    alltxt.push(s3_txts);
    showtxtnum++;
  }

	if(txtout == 5 && s1_mousestatus!=5){
   	s1_mousestatus =5;
    alltxt.push(s2_txts);
    showtxtnum++;
  }

  if(showtxtnum>lastshowtxtnum){
    //show the words
  for(let i =1;i<alltxt[showtxtnum].length;i++){
		fill(0);
		if(alltxt.length>=6)fill('#9C5A0A');
    noStroke();
    textAlign(LEFT);

    text(alltxt[showtxtnum][i],txtbx,txtby);
    txtbx = txtbx + textWidth(alltxt[showtxtnum][i])+textWidth('a');
    	if(txtbx>1370){
      	txtby+=20;
        txtbx=1077;
     	}

  }

  }
  lastshowtxtnum = showtxtnum;
}
