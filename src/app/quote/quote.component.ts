import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
  new Quote ('JP', 'There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.', 'Epictetus'),
  new Quote('MN', 'The two most powerful warriors are patience and time.', 'Leo Tolstoy'),
  new Quote('BF', 'Time is money', 'Benjamin Franklin'),
  new Quote('FR','Lost time is never found again.', 'F.G Randos'),
  new Quote('IP', 'The universe is expanding.', 'I.J Persons'),
  ];
  addNewQuote(addedQuote){
    this.quotes.push(addedQuote)
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
