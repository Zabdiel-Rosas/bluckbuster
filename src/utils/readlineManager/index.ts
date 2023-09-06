import readline from 'readline'

const rlInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

export class RlManager {
  private rl: readline.Interface
  constructor(rl: readline.Interface) {
    this.rl = rl
  }

  askUser(question: string, callback: (answer: string) => void) {
    return this.rl.question(question, callback)
  }

  close() {
    return this.rl.close()
  }
}

export const rlManager = new RlManager(rlInterface)
