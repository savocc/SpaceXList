import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule,Routes} from '@angular/router';
 import {AppComponent1} from './missionlist/missionlist.component';
 import {StudentComponent} from './missiondetails/missiondetails.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';



const routes: Routes = [
   { path: 'part2/:id', component: StudentComponent}
 
];

@NgModule({
  declarations: [
    AppComponent1,
    AppComponent
   // ShowApiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent1}
     

    ]),
    BrowserAnimationsModule,
    MatButtonModule ,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    MatToolbarModule,
    RouterModule
  ],
    entryComponents: [
    AppComponent1
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
