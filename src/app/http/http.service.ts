import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private ApiUrl
  private baseV1 = "v1/";


  constructor(private _http: HttpClient) {
    // this.ApiUrl = "http://40.65.188.86:8090/api/";
    this.ApiUrl = "/api/";
  }
  private getHeader() {
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("authToken"),
      }),
    };
    return httpOptions;
  }
  private getHeaderUpoad() {
    let httpOptions = {
      headers: new HttpHeaders({
        "x-auth-token": localStorage.getItem("authToken"),
      }),
    };
    return httpOptions;
  }

  private getHeaderWithoutToken() {
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return httpOptions;
  }
  // =======================================Master=Api's=================================================

  auth(postdata: { email: string, password: string }) {
    let httpOptions = this.getHeaderWithoutToken();
    console.log(this.ApiUrl + this.baseV1 + "users/auth");

    return this._http.post<any>(this.ApiUrl + this.baseV1 + "users/auth", postdata, httpOptions)
  }
  uploadResource(postdata) {
    let httpOptions = this.getHeaderUpoad();
    return this._http.post<any>(this.ApiUrl + this.baseV1 + "images", postdata, httpOptions)
  }

  getImages(postdata: string) {
    let httpOptions = this.getHeader();
    console.log(this.ApiUrl + this.baseV1 + "users/auth");

    return this._http.get<any>(this.ApiUrl + this.baseV1 + "images/" + postdata, httpOptions)
  }
}
