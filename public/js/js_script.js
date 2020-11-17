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

//var orderButton =document.getElementById("oButtonId");
//orderButton.addEventListener("click", clickMessage);

//function clickMessage(){
//  console.log("Button clicked!");
//}
function getContactInfo(){
  var contactArray=[];

  var fullName= document.getElementById("fullname");
  var eMail= document.getElementById("email");
  var gata= document.getElementById("gata");
  var gatuNr= document.getElementById("gatunr");
  var betalning=document.getElementById("betalning");
  var gender=document.getElementsByName("kön");

  contactArray.push(fullName.value);
  contactArray.push(eMail.value);
  contactArray.push(gata.value);
  contactArray.push(gatuNr.value);
  contactArray.push(betalning.value);

  for (var i = 0, length = gender.length; i < length; i++) {
    if (gender[i].checked) {
        contactArray.push((gender[i].value));
    }
  }
  return contactArray
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


function clickMessage(){
  console.log("Button clicked!");
  console.log(getContactInfo());
  console.log(getBurgerInfo());
  var infoArray=[getContactInfo(), getBurgerInfo()];

  //var orderInfo=document.getElementById("TextOrderInfo");
  //var text = document.createTextNode(getContactInfo());
  // for(var i = 0, length = getContactInfo().length; i < length; i++){
  //   textOrderInfo.textContent=getContactInfo()[i];
  // }
  textOrderInfo.textContent="Din kontaktinfo: " + getContactInfo();
  textBurgerInfo.textContent="Din order: " + getBurgerInfo();

}
