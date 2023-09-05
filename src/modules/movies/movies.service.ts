import { MoviesRepository, moviesRepository } from './movies.repository'

export class MoviesService {
  private repository: MoviesRepository

  constructor(repository: MoviesRepository) {
    this.repository = repository
  }

  getAllMovies() {
    return this.repository.getAll()
  }
}

export const moviesService = new MoviesService(moviesRepository)
