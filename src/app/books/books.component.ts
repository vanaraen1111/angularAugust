import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  isShowing: boolean = true;
  name: string = 'Clean Code';
  author: string  = 'Robert C Martin';
  src: string  = 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1323/9780132350884.jpg'
  constructor() { }

  ngOnInit(): void {
  }


}
