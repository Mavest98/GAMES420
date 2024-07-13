// import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesapiService {
  private apiUrl = 'https://api.rawg.io/api';
  private apiKey = 'c523e8d3e3bb4400b9528907e9c176da'; // Replace with your RAWG API key

  constructor(private http: HttpClient) { }

  // Method to get a list of games
  getGames(page: number = 1, pageSize: number = 20): Observable<any> {
    const params = {
      key: this.apiKey,
      page: page.toString(),
      page_size: pageSize.toString()
    };

    return this.http.get<any>(`${this.apiUrl}/games`, { params });
  }

  // Method to get a list of genres
  getGenres(): Observable<any> {
    const params = {
      key: this.apiKey
    };

    return this.http.get<any>(`${this.apiUrl}/genres`, { params });
  }

  getGenreById(id: string): Observable<any> {
    const params = {
      key: this.apiKey
    };

    return this.http.get<any>(`${this.apiUrl}/genres/${id}`, { params });
  }

  getGamesByGenre(genreId: string, page: number = 1, pageSize: number = 20): Observable<any> {
    const params = {
      key: this.apiKey,
      genres: genreId,
      page: page.toString(),
      page_size: pageSize.toString()
    };
    return this.http.get<any>(`${this.apiUrl}/games`, { params });
  }

  getGameTrailers(gameId: string): Observable<any> {
    const params = { key: this.apiKey };
    return this.http.get<any>(`${this.apiUrl}/games/${gameId}/movies`, { params });
  }
}
