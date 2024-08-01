import { Customer } from "./customer";
import { Feedback } from "./feedback";
import { Product } from "./product";
import { Store } from "./store";

let storeA = new Store("ProsStore");
let customerA = new Customer("Pros", "Nob");
let customerB = new Customer("Naki", "Se");
let customerC = new Customer("Nak", "Sek");


let feedbackA = new Feedback("good", 10, customerA);
let feedbackB = new Feedback("good", 10, customerB);
let feedbackC = new Feedback("bad", 7, customerC);
let productA = new Product("Orange", 1000);
let productB = new Product("apple", 1500);
let productC = new Product("banana", 800);
productA.addFeedback([feedbackA]);
productB.addFeedback([feedbackA, feedbackB]);
productC.addFeedback([feedbackA, feedbackB, feedbackC]);
storeA.addProduct([productA, productB, productC]);
storeA.addCustomer([customerA, customerB, customerC])
// console.log(storeA)
console.log(storeA.getCustomerComments(customerB))
console.log(storeA.getFeedbackCOntaining("bad"))
console.log(storeA.getProductLessThan(1100))