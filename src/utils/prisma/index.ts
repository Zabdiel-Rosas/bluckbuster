import { PrismaClient } from '@prisma/client'

export const prismaService = new PrismaClient()

export const movieStorage = prismaService.movie
