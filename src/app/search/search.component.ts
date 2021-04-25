import { Component, OnInit } from '@angular/core';
import { APIGithubService } from '../apigithub.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  listUsers: any = [];
  login: string ="";
  select: string ="users";
  result: boolean = false;
  resultRepos: boolean = false;
  listRepo: string ="";
  repos:any = ['repos'];
  noFoundUser: boolean = false;
  noFoundRepos: boolean = false;
  errorUsers:any = [];
  tutorial:boolean = true;

  
  constructor(private list: APIGithubService) { }

  buscaUsers() {
    this.login = (document.getElementById('infoSearch') as HTMLInputElement).value;
    this.select = (document.getElementById('select') as HTMLInputElement).value;
    
    (document.getElementById("formSearcb") as HTMLFormElement).addEventListener("submit", event => {
      event.preventDefault();
    })

    if (this.login == "" || this.select == "") {
      
    }else{
      this.list.searchServUser(this.login,this.select).subscribe(
        listUsers => {
          this.listUsers = listUsers;
          this.noFoundUser = true;
          this.tutorial = false;
          return listUsers
        }, 
        errorUsers => {
          this.errorUsers = errorUsers; 
          if (this.errorUsers.status == 404) {
            this.noFoundUser = false;
            this.errorUsers = [];
            this.tutorial = false;
          }
        });
        this.result = true
        this.repos = ['repos']
    }
    (document.getElementById('infoSearch') as HTMLInputElement).value = ""; 
  }



  buscaRepo(){
    this.list.searchServRepo(this.login,this.select).subscribe(repos => {this.repos = repos}, errorRepos => {console.log(errorRepos)})
    this.noFoundRepos = true;
    this.resultRepos = true
  }


  ngOnInit(): void {
  }

}
