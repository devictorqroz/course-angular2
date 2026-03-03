import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples-pipes',
  templateUrl: './examples-pipes.component.html',
  styleUrls: ['./examples-pipes.component.css']
})
export class ExamplesPipesComponent implements OnInit {

  book: any = {
    title: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    totalPages: 314,
    price: 44.99,
    publicationDate: new Date(2016, 5, 23),
    url: 'http://store.com/jsBook'

  };

  books: string [] = ['Java', 'Angular2'];

  filter: string;

  addBook(newBook) {
    this.books.push(newBook);
    console.log(this.books);
  }

  constructor() { }

  ngOnInit() {
  }

}
