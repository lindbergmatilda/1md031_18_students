// Vue script för hamburgesidan



//var ham1 = new MenuItem('happy', 'Super Happy Meal', '880', false, false, false, "https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Cheeseburger.jpg?$Product_Desktop$" );
//var ham2 = new MenuItem('tasty', 'Super Tasty Meal', '1100', true, true, true, "https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Quarter-Pounder-with-Cheese.jpg?$Product_Desktop$" );
//var ham3 = new MenuItem('double', 'Double Tasty Meal', '1500', true, true, true, "https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Big-Mac.jpg?$Product_Desktop$" );
//var ham4 = new MenuItem('no', 'No Meal', '0', false, false, false, "https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Cheeseburger.jpg?$Product_Desktop$" );
//var ham5 = new MenuItem('bad', 'Bad Meal', '2500', true, false, true, "https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Cheeseburger.jpg?$Product_Desktop$" );

//console.log( ham1.info());

//var burgerList = [ham1, ham2, ham3, ham4, ham5];


var vm = new Vue({
  el: '#burgID',
  data: {
     burgers: food
  }
})

var orderButton =document.getElementById("oButtonId");
orderButton.addEventListener("click", clickMessage);
