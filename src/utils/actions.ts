import { moviesController } from '../modules/movies/movies.controller'
import { rlManager } from './readlineManager'

export const ACTIONS = {
  GET_ALL_MOVIES: () => moviesController.getAllMovies(),
  GET_MOVIE: () => {
    rlManager.askUser('Please enter the id of the movie: ', (input) => {
      const id = parseInt(input)
      return moviesController.getMovie(id)
    })
  },
} as const
