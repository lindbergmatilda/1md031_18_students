//Java script dokument för hamburgesida

function MenuItem(id, hamburger, kC, g, l, n, img){
  this.burgerID=id;
  this.name=hamburger;
  this.kCal=kC;
  this.gluten= g;
  this.lactose=l;
  this.nuts=n;
  this.imgUrl=img;
  this.info=function(){
    return this.name + ': ' + this.kCal + ' kCal';
  };
}

// Eventlistener in JavaScript:
//var orderButton =document.getElementById("oButtonId");
//orderButton.addEventListener("click", clickMessage);

function clickMessage(){
  console.log("Button clicked!");
  console.log(getContactInfo());
  console.log(getBurgerInfo());
  var infoArray=[getContactInfo(), getBurgerInfo()];


  textOrderInfo.textContent="Din kontaktinfo: " + getContactInfo();
  textBurgerInfo.textContent="Din order: " + getBurgerInfo();
}


function getContactInfo(){
  var contactArray=[];

  var fullName= document.getElementById("fullname");
  var eMail= document.getElementById("email");
  //var gata= document.getElementById("gata");
  //var gatuNr= document.getElementById("gatunr");
  var betalning=document.getElementById("betalning");
  var gender=document.getElementsByName("kön");

  contactArray.push(fullName.value);
  contactArray.push(eMail.value);
  //contactArray.push(gata.value);
  //contactArray.push(gatuNr.value);
  contactArray.push(betalning.value);

  for (var i = 0, length = gender.length; i < length; i++) {
    if (gender[i].checked) {
        contactArray.push((gender[i].value));
    }
  }
  return contactArray
}

function getContactText(){
  var array = getContactInfo();
  var text= "";
  text[1]= " Fullname: " + array[1];
  text[2]= "E-mail: " + array[2];
  text[3]= "Betalningssätt: " + array[5];
  text[4]= "Kön: " + array[6];
  return text;
  }



function getBurgerInfo(){
  var burgerArray=[];
  var burgerBox=document.getElementsByName("burgerBox");
  for (var i=0, length=food.length; i<length; i++){
    if (burgerBox[i].checked){
      burgerArray.push(burgerBox[i].value)
    }
  }
  return burgerArray
}
