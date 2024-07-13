import { Component, OnInit } from '@angular/core';
import { GamesapiService } from 'src/app/service/gamesapi.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  games: any;

  constructor(private gamesapiService: GamesapiService) { }

  ngOnInit(): void {
    this.gamesapiService.getGames().subscribe(data => {
      this.games = data;
    });
  }
}
