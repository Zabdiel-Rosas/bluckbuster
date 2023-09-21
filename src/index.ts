import router from './modules/movies/movies.router'
import { rlManager } from './utils/readlineManager'
import { ACTIONS } from './utils/actions'
import { prismaService } from './utils/prisma'

function handler(answer: string) {
  const index = parseInt(answer) - 1
  const actions = Object.keys(ACTIONS)
  const choice = actions[index] as keyof typeof ACTIONS

  router(choice)
    .then(async () => {
      await prismaService.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prismaService.$disconnect()
      process.exit()
    })
}

function startApp() {
  rlManager.displayMenu()
  rlManager.line(handler)
}

startApp()
