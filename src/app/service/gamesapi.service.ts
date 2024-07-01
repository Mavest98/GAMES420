import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesapiService {
  private apiUrl = 'https://api.rawg.io/api/games?key=c523e8d3e3bb4400b9528907e9c176da&dates=2019-09-01,2019-09-30&platforms=18,1,7';
  private apiKey = 'c523e8d3e3bb4400b9528907e9c176da'; // Replace with your RAWG API key

  constructor(private http: HttpClient) { }

  // Method to get a list of games
  getGames(page: number = 1, pageSize: number = 20): Observable<any> {
    const params = new HttpParams()
      .set('key', this.apiKey)
      .set('page', page.toString())
      .set('page_size', pageSize.toString());

    return this.http.get<any>(`${this.apiUrl}/games`, { params });
  }
}
