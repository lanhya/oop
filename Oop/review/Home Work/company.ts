class Store {
    name: string;
    products: Product[] = [];
    customers: Customer[] = [];
    constructor(name: string) {
        this.name = name
    }
    addProduct(product: Product): any {
        this.products.push(product);
    }

    addCustomer(customer: Customer) {
        this.customers.push(customer);
    }

    getProduct(price: any) {
        for (let prices of this.products) {
            if ( price < prices ) {
                this.products.push(price);
            }
        }
    }

    getFeedback(feedback: Customer) {
        for (let feedbacks of this.products) {
            for (let feedbackI of feedbacks.addFeedback[]()) {
                if (feedback === feedbackI ) {
                    this.customers.push(feedback);
                }
            
            }
        }
    }
}

class Product {
    price: number;
    name: string;
    feedbacks: FeedBack[] = [];
    constructor(name: string, price: number) {
        this.price = price
        this.name = name
    }
    addFeedback(feedback: FeedBack) {
        this.feedbacks.push(feedback);
    }
}

class Customer {
    Fname: string;
    Lname: string
    feedback: FeedBack;
    constructor(Fname: string, Lname: string) {
        this.Fname = Fname
        this.Lname = Lname
    }

    getFeedback() {
        return this.feedback;
    }
}

class FeedBack {
    comment: string;
    evaluation: number;
    constructor(comment: string, evaluation: number) {
        this.comment = comment
        this.evaluation = evaluation
    }
}