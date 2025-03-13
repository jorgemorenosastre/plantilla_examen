import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MoviesService } from '../peliculas/peliculas.service';
import { Movie } from '../entities/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  findAll(): Promise<Movie[]> {
    return this.moviesService.findAll();
  }
}
