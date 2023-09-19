import { moviesController } from '../modules/movies/movies.controller'
import { rlManager } from './readlineManager'

export const ACTIONS = {
  GET_ALL_MOVIES: () => moviesController.get(),
  GET_MOVIE: () => {
    rlManager.askUser('Please enter the id of the movie: ', (input) => {
      const id = parseInt(input)
      return moviesController.getById(id)
    })
  },
  CREATE_MOVIE: () => {
    console.log('Please enter the next fields for the movie:\n')

    interface Movie {
      name: string
      description: string
      year: number
      genre: string
    }

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
      rlManager.askUser(`${key}: `, (input) => {
        const value: string | number = key === 'year' ? parseInt(input) : input

        ;(movie[key] as string | number) = value

        const remainingProperties = getRemainingProperties(key)
        console.log('remainingPropertys: ', remainingProperties)

        if (remainingProperties.length === 0) {
          console.log('new movie object: ', movie)
          rlManager.close()
        } else {
          updateMovieProperty(remainingProperties[0])
        }
      })
    }

    updateMovieProperty(keys[0])
  },
} as const
