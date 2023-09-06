import { Prisma, PrismaClient } from '@prisma/client'
import { prismaService } from '../../utils/prisma'

export class MoviesRepository {
  private db: PrismaClient

  constructor(db: PrismaClient) {
    this.db = db
  }

  async getAll() {
    return await this.db.movie.findMany()
  }
}

export const moviesRepository = new MoviesRepository(prismaService)
