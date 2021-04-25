import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { SearchComponent } from './search.component';
import { APIGithubService } from '../apigithub.service';



describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let service: APIGithubService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      declarations: [ SearchComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [APIGithubService]
  }));

  beforeEach(() => {
    const service: APIGithubService = TestBed.get(APIGithubService);
  });
  

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component search', () => {
    expect(component).toBeTruthy();
  });

  it('should have listUsers = []', () => {
    expect(component.listUsers).toBeTruthy();
  });

  it('should have login = ""', () => {
    expect(component.login).toMatch('');
  });

  it('should have select = "users"', () => {
    expect(component.select).toMatch('user');
  });

  it('should have result = false before buscaUsers(), after  result = true' , () => {
    expect(component.result).toBeFalsy();
    let login = 'fjavier02';
    let select = 'users';
    (document.getElementById('infoSearch') as HTMLInputElement).value = login;
    (document.getElementById('select') as HTMLInputElement).value = select;
    component.buscaUsers()
    expect(component.result).toBeTruthy();
  });

 /*  it('should have resultRepos = false', () => {
    expect(component.resultRepos).toBeFalsy();
  }); */

  it('should have listRepo = ""', () => {

    expect(component.listRepo).toMatch('');
  });

  it('should have repos = ["repos"]', () => {
    expect(component.repos).toEqual(['repos']);
    let login = '123';
    let select = 'users';
    component.buscaRepo();
    expect(component.repos.length).toEqual(1)
  });

  it('should have noFoundUser = false', () => {
    expect(component.noFoundUser).toBeFalsy();
    let login = 'fjavier02';
    let select = 'users';
    (document.getElementById('infoSearch') as HTMLInputElement).value = login;
    (document.getElementById('select') as HTMLInputElement).value = select;
    component.buscaUsers()
    setTimeout(() => {
      expect(component.noFoundUser).toBeTruthy();
    }, 250);
  });
    

  it('should have noFoundRepos = false', () => {
    expect(component.noFoundRepos).toBeFalsy();
  });
  
  it('should have errorUsers = []', () => {
    expect(component.errorUsers).toEqual([]);
    let user = 'fjavier02';
    let select = 'users';
  
    (document.getElementById('infoSearch') as HTMLInputElement).value = user;
    (document.getElementById('select') as HTMLInputElement).value = select;
    component.buscaUsers()
    expect(component.login).toEqual('fjavier02');
  });
  
  it('should have tutorial = true  before buscaUsers(), after  tutorial = false', () => {
    expect(component.tutorial).toBeTruthy();

    let user = 'fjavier02';
    let select = 'users';
  
    (document.getElementById('infoSearch') as HTMLInputElement).value = user;
    (document.getElementById('select') as HTMLInputElement).value = select;
    component.buscaUsers()
    setTimeout(() => {
      expect(component.tutorial).toBeFalsy();
    }, 500);

  });

  it('should have buscaUsers function', () => {
    expect(component.buscaUsers()).toBeUndefined();
    
  });

  it('should test the subscribe listUsers succeeds', async function () {
    let user = 'fjavier02';
    let select = 'users';
  
    (document.getElementById('infoSearch') as HTMLInputElement).value = user;
    (document.getElementById('select') as HTMLInputElement).value = select;
    const result = await component.buscaUsers()
    setTimeout(() => {
      expect(result).toEqual(component.listUsers)
    }, 500);
  });

  it('should test the subscribe errorUsers succeeds', async function () {
    let user = 'asdasdasd';
    let select = 'users';
  
    (document.getElementById('infoSearch') as HTMLInputElement).value = user;
    (document.getElementById('select') as HTMLInputElement).value = select;
    const result = await component.buscaUsers()
    setTimeout(() => {
      expect(result).toEqual(component.errorUsers.status)
    }, 500);
    
  });

  it('should test the subscribe repos succeeds', async function () {
    let user = 'fjavier02';
    let select = 'users';
  
    (document.getElementById('infoSearch') as HTMLInputElement).value = user;
    (document.getElementById('select') as HTMLInputElement).value = select;
    const result = await component.buscaRepo()
    setTimeout(() => {
      expect(result).toEqual(component.repos)
    }, 500);
    
  });
  
  it('should have preventDefault function', () => {
    expect((document.getElementById("formSearcb") as HTMLFormElement).addEventListener("submit", event => {
      event.preventDefault()})).toBeUndefined();
  }); 


  

});
