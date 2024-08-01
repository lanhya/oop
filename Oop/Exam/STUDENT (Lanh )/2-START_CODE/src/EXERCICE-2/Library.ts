import { Book } from "./Book"

// TODO
export class Library{
    private name: string
    private address: string
    private book: Book[] = []
    constructor(name: string, address: string) {
        this.name = name
        this.address = address
    }
    addBook(books:Book[]) {
        for(let book of books){
            this.book.push(book);
        }
    }
    getBookFromAuthor(authorName:string) :Book[]{
        return this.book
    }
    getBookFromPublisher(publisher:string) : Book[]{
        return this.book
    }
}