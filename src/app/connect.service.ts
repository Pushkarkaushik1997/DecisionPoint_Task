import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  constructor(private http:HttpClient,private router: Router) { }

  gettingAllData(){
    // let obj1=null;
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getSpecificDetail(id){
    let obj2={
      id
    }
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    }
}
