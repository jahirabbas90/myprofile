import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  username = 'jahirabbas90';

  constructor(private http: HttpClient) {}

  getApiProjects(): Observable<any[]> {
    const getProjectsUrl = 'https://api.github.com/users/jahirabbas90/repos?sort=pushed';
    return this.http.get<any[]>(getProjectsUrl);
  }

  getRepoInfo(name: string): Observable<any[]> {
    const getRepoUrl = 'https://api.github.com/repos/jahirabbas90/' + name;
    return this.http.get<any[]>(getRepoUrl);
  }

  getStarredProjects(): Observable<any[]> {
    const getStarredUrl = 'https://gh-pinned-repos.now.sh/?username=jahirabbas90';
    return this.http.get<any[]>(getStarredUrl);
  }
}
