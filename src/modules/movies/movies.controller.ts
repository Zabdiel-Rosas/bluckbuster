import { MoviesService, moviesService } from './movies.service'
import { Movie } from './movies.types'

class MoviesController {
  private service: MoviesService

  constructor(service: MoviesService) {
    this.service = service
  }

  async get() {
    const movies = await this.service.getAllMovies()
    if (!movies) return 'Something went wrong!'
    return movies
  }

  async getById(id: number) {
    if (id > 0) {
      const movie = await this.service.getMovie(id)
      if (movie) {
        return movie
      } else {
        return `The movie with the id: ${id} wasn't found`
      }
    } else {
      return 'The value for the id must be a whole positive number!'
    }
  }

  async post(movie: Movie) {
    const createdMovie = await this.service.createMovie(movie)
    return createdMovie
  }

  async put(id: number, movieToUpdate: Movie) {
    const updatedMovie = await this.service.updateMovie(id, movieToUpdate)
    return updatedMovie
  }

  async delete(id: number) {
    return await this.service.deleteMovie(id)
  }
}

export const moviesController = new MoviesController(moviesService)
