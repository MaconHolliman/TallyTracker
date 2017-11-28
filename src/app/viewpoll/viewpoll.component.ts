import { Component, OnInit } from '@angular/core';
import { NgControlStatus } from '@angular/forms';
import { NgForm} from '@angular/forms';
import { NgSemanticModule } from "ng-semantic";
import { HttpClient } from '@angular/common/http';
import {MatTooltipModule} from '@angular/material/tooltip';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-viewpoll',
  templateUrl: './viewpoll.component.html',
  styleUrls: ['./viewpoll.component.css']
})
export class ViewpollComponent implements OnInit {
  tempQuestion: string = '';
  id: number = 1;
  data = [
  ];
  

   @Input() tempID: number;

  specificPoll: any;
  numOfQuestion: number = 0; //Add one to this value to get number of elements. But, the number from index 0, is the amount.
  dataFull = [
    { votes: 1, question: 'one', val: '', index: 1},
    { votes: 2, question: 'Two', val: '', index: 2},
    { votes: 3, question: 'one', val: '', index: 3},
    { votes: 4, question: 'Two', val: '', index: 4},
    { votes: 5, question: 'one', val: '', index: 5},
    { votes: 6, question: 'Two', val: '', index: 6},
    { votes: 7, question: 'one', val: '', index: 7},
    { votes: 8, question: 'Two', val: '', index: 8},
  ];

  constructor(private http: HttpClient) { }
  voted: boolean = false;
 

  vote(q: string){
    //console.log(q);   q is the option they chose
   
    for(var x = 0; x < this.numOfQuestion;x++)
    {
      if(this.data[x].question == q && this.voted != true)
      {
        ++this.data[x].votes;
        console.log(this.data[x].votes);
        this.voted = true;

      $("i").removeClass("square");
      }
    }
  }

  
  errFix: any;
  getPollById(): void {
    this.http.get('http://localhost:3000/api/polls/' + this.tempID).subscribe(errfix => {
    // Read the result field from the JSON response.
    //this.results = JSON.stringify(data);
    //console.log(res);'
    this.errFix = errfix;
    this.tempQuestion = this.errFix.question;
    this.specificPoll = this.errFix;
    this.initPoll();
    //console.log(JSON.stringify(data[0]));
    });
  }

  initPoll(){
    for (var i = this.numOfQuestion;i < this.specificPoll.options.length-1;i++)
    {
      if (this.specificPoll.options[i] != '' && this.specificPoll.options[i] != null && this.specificPoll.options[i] != 'null')
      {
        this.numOfQuestion++;
      }
      console.log(this.numOfQuestion);
    }

    for(var c = 0; c < this.numOfQuestion; c++)
    {
      this.data[c] = this.dataFull[c];
      this.data[c].question = this.specificPoll.options[c];
      this.data[c].votes = this.specificPoll.votes[c];
     // console.log(this.data);
      
    }

  }


  ngOnInit() {
    //console.log(this.tempID);
    this.getPollById()
  }

}
