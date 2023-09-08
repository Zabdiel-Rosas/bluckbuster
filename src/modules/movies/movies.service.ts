import { MoviesRepository, moviesRepository } from './movies.repository'

export class MoviesService {
  private repository: MoviesRepository

  constructor(repository: MoviesRepository) {
    this.repository = repository
  }

  async getAllMovies() {
    return await this.repository.getAll()
  }
}

export const moviesService = new MoviesService(moviesRepository)
