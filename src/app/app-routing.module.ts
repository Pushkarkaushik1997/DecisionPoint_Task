import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {UserdetailsComponent} from './userdetails/userdetails.component';


const routes: Routes = [

  
    {path:'',component:MainComponent},
    {path:'userdetail/:id',component:UserdetailsComponent},
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
