import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
   votes: number
   @Input () quote:Quote
  constructor() { 
    this.votes += 1
  }
  likeVote(): boolean{
    this.votes +=1;
    return false;
  }

  dislikeVote(): boolean{
   this.votes -=1;
   return false;
 }
  
   
  ngOnInit(): void {
  }

}
