import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIGithubService {

  constructor(private http: HttpClient) { }

  searchServUser(dato:string, select:string) {
    let apiUrl = 'https://api.github.com/'+select+'/'+dato;
    return this.http.get(apiUrl); 
  } 
  searchServRepo(dato:string, select:string) {
    let apiUrl = 'https://api.github.com/'+select+'/'+dato+'/repos';
    return this.http.get(apiUrl); 
  } 
}
