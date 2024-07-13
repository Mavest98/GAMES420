import { Component, OnInit } from '@angular/core';
import { GamesapiService } from 'src/app/service/gamesapi.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  genres: any[] = [];

  constructor(private gamesapiService: GamesapiService) { }

  ngOnInit(): void {
    this.gamesapiService.getGenres().subscribe(data => {
      this.genres = data.results;
      console.log(this.genres);
    });
  }
}
