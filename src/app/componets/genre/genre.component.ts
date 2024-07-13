import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesapiService } from 'src/app/service/gamesapi.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
  genre: any;
  games: any;

  constructor(
    private route: ActivatedRoute,
    private gamesapiService: GamesapiService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const genreId = params.get('id');
      if (genreId) {
        this.gamesapiService.getGenreById(genreId).subscribe(data => {
          this.genre = data;
        });
        this.gamesapiService.getGamesByGenre(genreId).subscribe(data => {
          this.games = data;
        });
      }
    });
  }

  playTrailer(game: any): void {
    if (!game.trailerUrl) {
      this.gamesapiService.getGameTrailers(game.id).subscribe(
        data => {
          const trailer = data.results.length > 0 ? data.results[0].data.max : null;
          if (trailer) {
            game.trailerUrl = trailer;
          }
        },
        error => {
          console.error('Error fetching trailer:', error);
          game.trailerUrl = null;
        }
      );
    }
  }

  stopTrailer(game: any): void {
    game.trailerUrl = null;
  }
}
