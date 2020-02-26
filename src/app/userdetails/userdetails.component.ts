import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ConnectService } from "../connect.service";

@Component({
  selector: "app-userdetails",
  templateUrl: "./userdetails.component.html",
  styleUrls: ["./userdetails.component.css"]
})
export class UserdetailsComponent implements OnInit {
  
  
  id;
  obj2;
  dataArray;

  constructor(private Connect: ConnectService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params["id"];
  }

  ngOnInit() {
    this.getSpecificDetails();
  }

  getSpecificDetails() {
    this.Connect.getSpecificDetail(this.id).subscribe(res => {
      this.dataArray = res;
    });
  }
}
