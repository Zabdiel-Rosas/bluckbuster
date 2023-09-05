import { moviesService } from './movies.service'

async function router(choice: number) {
  switch (choice) {
    case 0:
      const allMovies = await moviesService.getAllMovies()
      console.log(allMovies)
      break
    default:
      break
  }
}

export default router
