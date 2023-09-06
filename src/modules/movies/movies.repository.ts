import { Prisma } from '@prisma/client'
import { movieStorage } from '../../utils/prisma'

export class MoviesRepository {
  private movieStorage: Prisma.MovieDelegate

  constructor(movieStorage: Prisma.MovieDelegate) {
    this.movieStorage = movieStorage
  }

  async getAll() {
    return await this.movieStorage.findMany()
  }
}

export const moviesRepository = new MoviesRepository(movieStorage)
