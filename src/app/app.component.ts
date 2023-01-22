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
  imgURL: string = '';
  promtUser: string = '';
  constructor(public http : HttpClient){

  }

  ngOnInit(): void {
   
  }
  onClickButton(){
    this.getImage();
  }
  getImage(){
    this.hidden = true;
    let val : reqBody = {prompt: this.promtUser, n: 1, size: '1024x1024'}
    this.createImage(val).subscribe(resp => {
      this.imgURL = resp.data[0].url;
      this.hidden = false;
  })
  }
  
  createImage(inputBody: reqBody): Observable<any> {
    const headers = { 'Authorization': `Bearer ${environment.OPENAI_API_KEY}` };
    return this.http.post<any>('https://api.openai.com/v1/images/generations',
      inputBody, { headers });
  }

  showspanner(){
    this.hidden = true
  }
}

