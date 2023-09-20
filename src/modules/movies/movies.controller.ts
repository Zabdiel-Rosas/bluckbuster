import { MoviesService, moviesService } from './movies.service'
import { rlManager } from '../../utils/readlineManager'
import { Movie } from './movies.types'

class MoviesController {
  private service: MoviesService

  constructor(service: MoviesService) {
    this.service = service
  }

  async get() {
    const movies = await this.service.getAllMovies()
    console.log(movies)
  }

  async getById(id: number) {
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

  async post(movie: Movie) {
    const createdMovie = await this.service.createMovie(movie)
    console.log(createdMovie)
  }
}

export const moviesController = new MoviesController(moviesService)
