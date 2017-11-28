import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { NgModel } from '@angular/forms';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tally Track';

  createPoll: boolean = true;
  viewPoll: boolean = false;
  id: number = 0;

  toggleToView(x: number){
    //console.log(x);
    this.id = x;
    this.createPoll = !this.createPoll;
    this.viewPoll = !this.viewPoll;
  }
}

