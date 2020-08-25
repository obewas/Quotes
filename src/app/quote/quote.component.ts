import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
  new Quote (1, 'There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.', 'Epictetus', 'John'),
  new Quote(2, 'The two most powerful warriors are patience and time.', 'Leo Tolstoy',"General Kutuzov"),
  new Quote(3, 'Time is money', 'Benjamin Franklin',"B.K"),
  new Quote(4, 'The galaxy is large.', 'F.G Randos',"P.S"),
  new Quote(5, 'The universe is expanding.', 'I.J Persons',"Q.T"),
  ];
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1
    this.quotes.unshift(quote)
  }
  upvote(i) {
    this.quotes[i].upvotes ++;
  }
  downvote(i) {
    this.quotes[i].downvotes ++
  }
  deleteQuote(i) {
    this.quotes.splice(i, 1)
  }
  initNumber:number
  lastNumber:number
  count:number
  topVote(){
    this.initNumber = 0
    this.lastNumber = 0

    for(this.count=0 ; this.count < this.quotes.length; this.count++){
      this.lastNumber = this.quotes[this.count].upvotes;
      if(this.lastNumber > this.initNumber){this.initNumber = this.lastNumber}
    }
    return this.initNumber
  }

  constructor() { }

  ngOnInit(): void {
  }

}
