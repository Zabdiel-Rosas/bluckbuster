import { moviesController } from '../modules/movies/movies.controller'
import { rlManager } from './readlineManager'
import { Movie } from '../modules/movies/movies.types'

export const ACTIONS = {
  GET_ALL_MOVIES: async () => {
    const result = await moviesController.get()
    console.log(result)
    rlManager.displayMenu()
  },
  GET_MOVIE: () => {
    rlManager.askUser('Please enter the id of the movie: ', async (input) => {
      const id = parseInt(input)
      const movie = await moviesController.getById(id)

      console.log(movie)
      rlManager.displayMenu()
    })
  },
  CREATE_MOVIE: () => {
    console.log('Please enter the next fields for the movie:\n')

    const movie: Movie = {
      name: 'default',
      description: 'default',
      year: 0,
      genre: 'default',
    }

    const keys: (keyof Movie)[] = ['name', 'description', 'year', 'genre']

    const getRemainingProperties = (property: keyof Movie) => {
      const index = keys.indexOf(property)
      return keys.slice(index + 1, keys.length)
    }

    const updateMovieProperty = (key: keyof Movie) => {
      rlManager.askUser(`${key}: `, async (input) => {
        const value: string | number = key === 'year' ? parseInt(input) : input

        ;(movie[key] as string | number) = value

        const remainingProperties = getRemainingProperties(key)

        if (remainingProperties.length === 0) {
          const createdMovie = await moviesController.post(movie)
          console.log(createdMovie)
          rlManager.displayMenu()
          return
        } else {
          updateMovieProperty(remainingProperties[0])
        }
      })
    }

    updateMovieProperty(keys[0])
  },
} as const
