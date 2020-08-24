import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
  new Quote (1, 'There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.', 'Epictetus', 'John')
  ];
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1
    this.quotes.unshift(quote)
  }
  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor
  }
  constructor() { }

  ngOnInit(): void {
  }

}
