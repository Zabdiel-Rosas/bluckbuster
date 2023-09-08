import { MoviesRepository, moviesRepository } from './movies.repository'

export class MoviesService {
  private repository: MoviesRepository

  constructor(repository: MoviesRepository) {
    this.repository = repository
  }

  async getAllMovies() {
    return await this.repository.getAll()
  }

  async getMovie(id: number) {
    return await this.repository.getById(id)
  }
}

export const moviesService = new MoviesService(moviesRepository)
