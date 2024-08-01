// -------------------------------------------------------------
// Add a GOOD comments instead of the todos
// -------------------------------------------------------------

class Fruit {
	type : string;
	color:string;
}

/**
* To check the fruitsBox is valid
* @param fruitsBox  to store fruits of type and color
* @return return as a boolean result depend on array of fruit 
*/
function isValidFruitBox(fruitsBox : Fruit[]) : boolean {
   
   // To check the type of fruit is banana (to check banana :: for short) (check by count = number)
   let xx = 0;
   for(let fruit of fruitsBox) {
	   if (fruit.type = "BANANA") {
		   xx++;
	   } 
   }
   
   // To check the type of fruit is apple and that color is green (to check green apple :: for short) (check by count = number)
   let yy = 0;
   for(let fruit of fruitsBox) {
	   if (fruit.type === "APPLE" && fruit.color === "GREEN") {
		   yy++;
	   } 
   }
   
   // To check the type of fruit is lemon and the color is orange (to check orange lemon :: for short) (check by count = number)
   let zz = 0;
   for(let fruit of fruitsBox) {
	   if (fruit.type == "LEMON" || fruit.color == "ORANGE") {
		   zz++;
	   } 
   }
	   
   // To return the valid value of function (boolean)
   return  xx>2 &&yy> 3 && zz>1;
}