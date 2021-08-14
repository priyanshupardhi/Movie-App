import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  movies: Movie[];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.searchMovie('Batman').subscribe(result => {
      this.movies = result.Search;
    });
  }

}
