import { Component, OnInit } from '@angular/core';
import { NgControlStatus } from '@angular/forms';
import { NgForm} from '@angular/forms';
import { NgSemanticModule } from "ng-semantic";
import { HttpClient } from '@angular/common/http';
import {MatTooltipModule} from '@angular/material/tooltip';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-createpoll',
  templateUrl: './createpoll.component.html',
  styleUrls: ['./createpoll.component.css']
})

export class CreatepollComponent implements OnInit {

 
  @Output() send: EventEmitter<any> = new EventEmitter();

  callParent(x: number) {
    this.send.next(x);
  }


  name: string = '';
  results: string;
  body: string;
  
  model: any = {};
  val: string;

  questions = 1;

  data = [
    { placeholder: 'Option One', name: 'One', modelPropName: 'one', val: '', index: 1},
    { placeholder: 'Option Two', name: 'Two', modelPropName: 'two', val: '', index: 2}
  ];

  dataFull = [
    { placeholder: 'Option One', name: 'One', modelPropName: 'one', val: '', index: 1},
    { placeholder: 'Option Two', name: 'Two', modelPropName: 'two', val: '', index: 2},
    { placeholder: 'Option Three', name: 'Three', modelPropName: 'three', val: '', index: 3},
    { placeholder: 'Option Four', name: 'Four', modelPropName: 'four', val: '', index: 4},
    { placeholder: 'Option Five', name: 'Five', modelPropName: 'five', val: '', index: 5},
    { placeholder: 'Option Six', name: 'Six', modelPropName: 'six', val: '', index: 6},
    { placeholder: 'Option Seven', name: 'Seven', modelPropName: 'seven', val: '', index: 7},
    { placeholder: 'Option Eight', name: 'Eight', modelPropName: 'eight', val: '', index: 8}
  ];

 

  setMultipleChoices(x: boolean){
    this.multiple = x;
  }

  setSingleIP(x: boolean){
    this.singleIP = x;
  }

  submit() {
    console.log('Data submitted: ', this.model);
  }

  addOption(){
    if(this.questions < 7)
    {
     this.questions +=1;
     this.data[this.questions] = this.dataFull[this.questions];
    }
  }

  checkIfLast(index: number)
  {
    if(index > this.questions){
      this.addOption();
    }
    
  }
  

 pollData = {
    "question": "string",
    "options": [
      "string"
    ],
    "votes": [
      0
    ],
    "multiple": false,
    "singleIP": true
  };


  id: number = 1;
  question: string = '';
  optOne: string = '';
  optTwo: string = '';
  optThree: string = '';
  optFour: string = '';
  optFive: string = '';
  optSix: string = '';
  singleIP: boolean = false;
  multiple: boolean = false;
  completed: boolean = false;
  
  
  setValue() { this.name = 'TestName from SetValue'; }

  
  constructor(private http: HttpClient) {}

  nothing(){}

  onSubmit(f: NgForm) {
    console.log(f);  // { first: '', last: '' }
    this.body = f.value;
    this.pollData.question = f.value.Question;
    this.pollData.options[0] = f.value.One;
    this.pollData.options[1] = f.value.Two;
    this.pollData.options[2] = f.value.Three;
    this.pollData.options[3] = f.value.Four;
    this.pollData.options[4] = f.value.Five;
    this.pollData.options[5] = f.value.Six;
    this.pollData.options[6] = f.value.Seven;
    this.pollData.options[7] = f.value.Eight;
    this.pollData.singleIP = this.singleIP;
    this.pollData.multiple = this.multiple;
    
    this.pollData.votes[0] = 0;
    this.pollData.votes[1] = 0;
    this.pollData.votes[2] = 0;
    this.pollData.votes[3] = 0;
    this.pollData.votes[4] = 0;
    this.pollData.votes[5] = 0;
    this.pollData.votes[6] = 0;
    this.pollData.votes[7] = 0;
    this.postPoll();
    
  }
  
  getPolls(): void {
    // Make the HTTP request:
    this.http.get('http://localhost:3000/api/polls').subscribe(data => {
    // Read the result field from the JSON response.
    this.results = JSON.stringify(data);
    console.log(this.results);
    //JSON stringify on the data object to get the entire thing, or specify an index.
    //console.log(JSON.stringify(data[0]));
    });
  }

  getPollById(): void {
    // Make the HTTP request:
    this.http.get('http://localhost:3000/api/polls/' + this.id).subscribe(data => {
    // Read the result field from the JSON response.
    this.results = JSON.stringify(data);
    console.log(this.results);
    //JSON stringify on the data object to get the entire thing, or specify an index.
    //console.log(JSON.stringify(data[0]));
    });
  }

  postPolls(): void {
    // Make the HTTP post:
    this.http.post('http://localhost:3000/api/polls', this.body).subscribe(data => {
    // Read the result field from the JSON response.
   // this.results = JSON.stringify(data);
   // console.log(this.results);
    //JSON stringify on the data object to get the entire thing, or specify an index.
    //console.log(JSON.stringify(data[0]));
    });
  }

  postPoll(): void {
    this.http.post('http://localhost:3000/api/polls', this.pollData).subscribe(body => {
     
      this.callParent(body.id);
    });
  }

  ngOnInit() {
    
  }

}
