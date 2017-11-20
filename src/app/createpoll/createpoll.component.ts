import { Component, OnInit } from '@angular/core';
import { NgControlStatus } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { NgSemanticModule } from "ng-semantic";


import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-createpoll',
  templateUrl: './createpoll.component.html',
  styleUrls: ['./createpoll.component.css']
})
export class CreatepollComponent implements OnInit {

  name: string = '';
  results: string;
  body: string;
  

  
  id: number = 1;
  question: string = '';
  optOne: string = '';
  optTwo: string = '';
  optThree: string = '';
  optFour: string = '';
  optFive: string = '';
  optSix: string = '';
  ipdup: boolean = false;
  multiple: boolean = false;
  completed: boolean = false;
  
  
   setValue() { this.name = 'TestName from SetValue'; }

  
  constructor(private http: HttpClient) {}

  onSubmit(f: NgForm) {
   console.log(f.value);  // { first: '', last: '' }
   this.body = f.value;
   console.log(this.body);
    console.log(f.valid);  // false
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
