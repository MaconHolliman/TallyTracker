import { Component, OnInit } from '@angular/core';
import { NgControlStatus } from '@angular/forms';
import { NgForm} from '@angular/forms';
import { NgSemanticModule } from "ng-semantic";
import { HttpClient } from '@angular/common/http';
import {MatTooltipModule} from '@angular/material/tooltip';
@Component({
  selector: 'app-createpoll',
  templateUrl: './createpoll.component.html',
  styleUrls: ['./createpoll.component.css']
})

export class CreatepollComponent implements OnInit {

  name: string = '';
  results: string;
  body: string;
  
  model: any = {};
  val: string;

  questions = 1;

  data = [
    { placeholder: 'Option One', name: 'One', modelPropName: 'one', val: ''},
    { placeholder: 'Option Two', name: 'Two', modelPropName: 'two', val: ''}
  ];

  dataFull = [
    { placeholder: 'Option One', name: 'One', modelPropName: 'one', val: ''},
    { placeholder: 'Option Two', name: 'Two', modelPropName: 'two', val: ''},
    { placeholder: 'Option Three', name: 'Three', modelPropName: 'three', val: ''},
    { placeholder: 'Option Four', name: 'Four', modelPropName: 'four', val: ''},
    { placeholder: 'Option Five', name: 'Five', modelPropName: 'five', val: ''},
    { placeholder: 'Option Six', name: 'Six', modelPropName: 'six', val: ''},
    { placeholder: 'Option Seven', name: 'Seven', modelPropName: 'seven', val: ''},
    { placeholder: 'Option Eight', name: 'Eight', modelPropName: 'eight', val: ''}
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
    console.log(this.body);
    console.log(f.valid);  // false
    console.log(this.pollData);
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
    this.results = JSON.stringify(data);
    console.log(this.results);
    //JSON stringify on the data object to get the entire thing, or specify an index.
    //console.log(JSON.stringify(data[0]));
    });
  }

  ngOnInit() {
    
  }

}
