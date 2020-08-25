export class Quote {
    
    public upvotes:number
    public downvotes:number
    public completeDate:Date
    
    constructor(public name:string, public quote:string, public author:string){
        this.upvotes = 0;
        this.downvotes = 0;
        this.completeDate= new Date
    }

        
}
