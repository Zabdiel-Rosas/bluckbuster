import readline from 'readline'
import { prismaService } from './utils/prisma'
import router from './modules/movies/movies.router'

// Create interface for reading and writing from/to the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const menuOptions = [
  'Get all Movies',
  'Get One Movie',
  'Create Movie',
  'Update Movie',
  'Delete Movie',
  'Exit',
]

function displayMenu() {
  console.log('Welcome to the Bluckbuster App\nMenu:')

  menuOptions.forEach((option, index) => {
    console.log(`${index + 1} ${option} `)
  })
}

function startApp() {
  displayMenu()
  rl.question('Select an option from the menu: ', (answer: string) => {
    const choice = parseInt(answer) - 1

    if (isNaN(choice) || choice < -1 || choice > menuOptions.length) {
      console.log('Please enter a valid option\n\n')
      startApp()
    } else if (menuOptions[choice] === 'Exit') {
      console.log('Exiting the application')
      rl.close()
    } else {
      console.log(`Your choice is: ${menuOptions[choice]}`)

      router(choice)
        .then(async () => {
          await prismaService.$disconnect()
        })
        .catch(async (e: any) => {
          console.error(e)
          await prismaService.$disconnect()
          process.exit()
        })
    }
  })
}

startApp()
