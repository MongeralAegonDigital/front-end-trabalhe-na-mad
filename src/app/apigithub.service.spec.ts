import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { APIGithubService } from './apigithub.service';

describe('APIGithubService', () => {
  let service: APIGithubService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [APIGithubService]
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIGithubService);
  });

  beforeEach(() => {
    const service: APIGithubService = TestBed.get(APIGithubService);
  });

  it('should be created service', () => {
    expect(service).toBeTruthy();
  });

  it('should have searchServUser function', () => {
    let dato:string = 'fjavier02'
    let select:string = "users"
    expect(service.searchServUser(dato, select)).toBeTruthy();
   });

   it('should have searchServRepo function', () => {
    let dato:string = 'fjavier02'
    let select:string = "users"
    expect(service.searchServRepo(dato, select)).toBeTruthy();
   });
});
