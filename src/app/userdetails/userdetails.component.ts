import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ConnectService } from "../connect.service";
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: "app-userdetails",
  templateUrl: "./userdetails.component.html",
  styleUrls: ["./userdetails.component.css"]
})
export class UserdetailsComponent implements OnInit {
  
  
  id;
  obj2;
  dataArray;
  searchString;
  updateValues;
  selectingcat;
  order;
  data:any=[];

  constructor(private Connect: ConnectService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params["id"];
  }

  ngOnInit() {
    this.getSpecificDetails();
    
  }
  setUpdate(obj2) {
    // console.log(obj);
    this.updateValues = obj2;
  }

  update() {
    this.Connect.update(this.updateValues._id,this.updateValues.body);
  }

  
  getSpecificDetails() {
    this.Connect.getSpecificDetail(this.id).subscribe(res => {
      this.dataArray = res;
    });
  }
}
