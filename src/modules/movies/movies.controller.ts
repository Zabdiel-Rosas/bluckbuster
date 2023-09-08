import { MoviesService, moviesService } from './movies.service'

class MoviesController {
  private service: MoviesService

  constructor(service: MoviesService) {
    this.service = service
  }

  async getAllMovies() {
    const movies = await this.service.getAllMovies()
    console.log(movies)
  }
}

export const moviesController = new MoviesController(moviesService)
