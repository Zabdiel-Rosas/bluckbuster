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

  async getById(id: number) {
    return await this.movieStorage.findUnique({
      where: {
        id,
      },
    })
  }
}

export const moviesRepository = new MoviesRepository(movieStorage)
