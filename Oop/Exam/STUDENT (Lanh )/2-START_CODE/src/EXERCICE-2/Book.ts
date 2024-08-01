import { Author } from "./Author"
import { Publisher } from "./Publisher"

// TODO
export class Book{
    private title: string
    private yearOfPublised: number
    private publisher: boolean
    private authors:Author[] = []
    constructor (tille: string, yearOfPublised: number) {
        this.title = tille
        this.yearOfPublised = yearOfPublised
    }
    addAuthor(authors: Author[]) {
        for(let autho of authors){
            this.authors.push(autho);
        }
    }
    setPublisher(publisher:Publisher) {
        
    }
}