import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  isDisabled = false;
  name: string = 'Clean Code';
  author: string  = 'Robert C Martin';
  src: string  = 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1323/9780132350884.jpg'
  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.isDisabled = true;
   // alert ("I am working");
  }

  myName : string = "";
  handleInput(event:any) {
    this.myName = event.target.value;
  }

}
