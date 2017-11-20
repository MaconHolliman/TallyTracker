import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgSemanticModule } from "ng-semantic";




import { AppComponent } from './app.component';
import { CreatepollComponent } from './createpoll/createpoll.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatepollComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatSidenavModule,
    NoopAnimationsModule,
    NgSemanticModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
