import { Communities } from './communities.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommunityService {
  JSON_COMMUNITIES = 'assets/json/communities.json';

  constructor(private httpClient: HttpClient) {}

  get communities(): Observable<Communities> {
    return this.httpClient.get<Communities>(this.JSON_COMMUNITIES);
  }
}
