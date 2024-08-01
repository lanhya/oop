import { Author } from "./Author";
import { Book } from "./Book";
import { Library } from "./Library";
import { Publisher } from "./Publisher";

// TODO
//book
let assentialTypescript = new Book("Essential Typescript",2018);
let effectiveTypescript = new Book("Effective Typescript", 2015);
let beginningVueJs3 = new Book("Beginning Vue.Js 3", 2020);
let buildWebFrontendwithVue2 = new Book("Build Web Frontend with Vue 2", 2017);
//Author

let ronan = new Author("Ronan");
assentialTypescript.addAuthor([ronan]);
beginningVueJs3.addAuthor([ronan]);
//library 
let abc1 = new Library("abm", "Phnom Penh");
let abc2 = new Library("abm", "Phnom Penh");
let abc3 = new Library("abm", "Phnom Penh");
let abc4 = new Library("abm", "Phnom Penh");
abc1.addBook([assentialTypescript]);
abc2.addBook([effectiveTypescript]);
abc3.addBook([beginningVueJs3]);
abc4.addBook([buildWebFrontendwithVue2]);
console.log(abc4);

//publisher
let abc = new Publisher("abc", "Phnom Penh");

