/*
 INSTRUCTIONS

	We want to manage customer food orders in a restaurant:

  - An Order has:
			- the customer name (string)
			- the date of the order (string)
			- the list of food orders (array of FoodOrder)


  - An FoodOrder has:
			- the food name (string)
			- the price (number)

	Q1 : Create the 2 types.

	Q2 : Create the following order :
				- customer = "HIM THE CRAZY"
				- date = "SEP 9"
				- food orders:
						- food : "french fries", price : 12
						- food  : "cambodian fries", price : 1
						- food : "ice scream", price : 4

	Q3 : Create a function that take as parameter a FoodOrder, and return the total price of the order
						getTotal(order : FoodOrder) : number
	
*/
type restaurant = {
	food:string;
	price: number;
};
type order = {
	customer: string;
	date: string;
	foodOrder: restaurant[];
}

let foodItem = [
	
]