import { Component, OnInit } from '@angular/core';
import { GamesapiService } from './../../service/gamesapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  games: any;

  constructor(private gamesapiService: GamesapiService) { }

  ngOnInit(): void {
    this.gamesapiService.getGames().subscribe(data => {
      this.games = data.results;  // Ensure to use the correct property to get the games array
      console.log(this.games);
    });
  }
}
