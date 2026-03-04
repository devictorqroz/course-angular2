import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

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

  getBooks() {
    if (this.books.length === 0 || this.filter === undefined
    || this.filter.trim() === '') {

      return this.books;
    }

    return this.books.filter((v) => {
      if (v.toLocaleLowerCase().indexOf(this.filter.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

  asyncValue = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Asynchronous value'), 2000);
  });

  asyncValue2 = Observable.interval(2000)
    .map(value => 'Asynchronous value 2');


  constructor() { }

  ngOnInit() {
  }
}
