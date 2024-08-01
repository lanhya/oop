import { Customer } from "./customer";
import { Feedback } from "./feedback";
import { Product } from "./product";
export class Store{
    name: string;
    products: Product[] = [];
    customers: Customer[] = [];
    constructor(name: string) {
        this.name = name
    }
    addProduct(products: Product[]) {
        for (let product of products){
            this.products.push(product)
        }
    }
    addCustomer(customers: Customer[]) {
        for(let customer of customers){
            this.customers.push(customer)
        }
        
    }
    getProductLessThan(price: number){
        let allProducts: Product[] = [];
        for ( let pro of this.products) {
            let producPrice = pro.price
            if (producPrice < price){
                allProducts.push(pro)
            }
        }
        return allProducts
    }
    getFeedbackCOntaining(keywork: string) {
        let listOfFeedback: Feedback[] = [];
        for (let proFeed of this.products) {
            let proFeeds = proFeed.feedbacks;
            for (let feedback of proFeeds) {
                let getFeed = feedback.comment;
                if (getFeed == keywork){
                    listOfFeedback.push(feedback);
                }
            }
        }
        return listOfFeedback;
    }
    getCustomerComments(customer: Customer) {
        let listOfComments: string[] = [];
        for (let product of this.products) {
            let feedback = product.feedbacks;
            for (let comment of feedback) {
                if (comment.author.firstname === customer.firstname && comment.author.lastname === customer.lastname) {
                    listOfComments.push(comment.comment);
                }
            }
        }
        return listOfComments;
    }
}
