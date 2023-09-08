import { moviesController } from '../modules/movies/movies.controller'

export const ACTIONS = {
  GET_ALL_MOVIES: () => moviesController.getAllMovies(),
} as const
