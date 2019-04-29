var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var button=document.getElementById("buttoncolor");
//console.log(css);
//console.log(color1);
//console.log(color2);

body.style.background="linear-gradient(to right,"+color1.value+", "+color2.value+")";
css.textContent=body.style.background+";";



function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color01="#";
  var color02="#";
  for (var i = 0; i < 6; i++) {
    color01 += letters[Math.floor(Math.random() * 16)];
    color02 += letters[Math.floor(Math.random() * 16)];
  }
  //console.log("01:" +color01 +"  02:" +color02);
  color1.value=color01;
  color2.value=color02;
  body.style.background="linear-gradient(to right,"+color01+", "+color02+")";
  css.textContent=body.style.background+";";
  return color01, color02;
}




function setGradient(){
	body.style.background="linear-gradient(to right,"+color1.value+", "+color2.value+")";
	 css.textContent=body.style.background+";";
	//css.innerHTML=body.style.background;
	
}
 
 //bunları html de inputları oninput/onclick yapınca yoruma aldık.
 //yine aynı sey oldu calıstı kod.wuhu
color1.addEventListener("input", setGradient
	//console.log(color1.value);
	);

color2.addEventListener("input", setGradient
	//console.log(color2.value);
	);

button.addEventListener("click",getRandomColor);