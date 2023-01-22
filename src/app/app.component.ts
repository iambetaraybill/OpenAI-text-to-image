import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { reqBody } from './req-res.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  dateNow : Date = new Date();
  hidden: boolean = false;
  constructor(public http : HttpClient){

  }

  ngOnInit(): void {
    // this.getImage();
  }
  // .subscribe(resp => {
  //   console.log(resp.data[0].url);
  // })
  
  
  
  createImage(inputBody: reqBody): Observable<any> {
    const headers = { 'Authorization': `Bearer ${environment.OPENAI_API_KEY}` };
    return this.http.post<any>('https://api.openai.com/v1/images/generations',
      inputBody, { headers });
  }

  showspanner(){
    this.hidden = true
  }
}

