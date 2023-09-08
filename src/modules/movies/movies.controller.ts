import { MoviesService, moviesService } from './movies.service'
import { rlManager } from '../../utils/readlineManager'

class MoviesController {
  private service: MoviesService

  constructor(service: MoviesService) {
    this.service = service
  }

  async getAllMovies() {
    const movies = await this.service.getAllMovies()
    console.log(movies)
  }

  async getMovie(id: number) {
    if (id > 0) {
      const movie = await this.service.getMovie(id)
      if (movie) {
        console.log(movie)
      } else {
        console.log(`The movie with the id: ${id} wasn't found`)
      }
    } else {
      console.log('The value for the id must be a whole positive number!')
    }
  }
}

export const moviesController = new MoviesController(moviesService)
