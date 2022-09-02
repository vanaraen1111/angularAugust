import { Component, OnInit } from '@angular/core';

interface Book {
  name:string
  author:string
  image:string
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  isShowing: boolean =  true;
  books: Book[] = [{
    name:  'Clean Code',
    author:   'Robert C Martin',
    image:    'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1323/9780132350884.jpg'
  },{
    name:  'Pragmatic Programmer',
    author:   'David Thomas',
    image:    'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/41HXiIojloL._AC_UL116_SR116,116_.jpg'
  }]

  constructor() { }

  ngOnInit(): void {
  }


}
