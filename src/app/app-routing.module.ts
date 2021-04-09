import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {

      path: '',

      redirectTo: 'missionlist/missionlist.component', 

      pathMatch: 'full'

  }];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ,
   RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }
