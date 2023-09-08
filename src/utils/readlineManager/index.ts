import readline from 'readline'
import { ACTIONS } from '../actions'

const rlInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

export class RlManager {
  private rl: readline.Interface
  constructor(rl: readline.Interface) {
    this.rl = rl
  }

  displayMenu() {
    const options = Object.keys(ACTIONS)

    options.forEach((element, index) => {
      let option = element.replace(/_/g, ' ')
      console.log(`${index + 1} ${option}`)
    })
  }

  askUser(question: string, callback: (answer: string) => void) {
    return this.rl.question(question, callback)
  }

  close() {
    return this.rl.close()
  }
}

export const rlManager = new RlManager(rlInterface)
