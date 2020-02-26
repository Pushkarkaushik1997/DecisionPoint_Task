import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  searchString;
 
  selectingcat;
  order;
  data:any=[];
  
 
  constructor(private Connect:ConnectService) { 
    
   }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.Connect.gettingAllData().subscribe(res=>{
      this.data=res;
      console.log(res);
    })

  }
  
}











 

  
  

  
  
  


 


