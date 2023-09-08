import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class MoviesRepository {
  async getAll() {
    return await prisma.movie.findMany()
  }
}

export const moviesRepository = new MoviesRepository()
