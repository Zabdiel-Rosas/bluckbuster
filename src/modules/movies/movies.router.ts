import { ACTIONS } from '../../utils/actions'

async function router(choice: keyof typeof ACTIONS) {
  const handler = ACTIONS[choice]
  if (!handler) {
    return 'Action not found for choice ' + choice
  }
  handler()
}

export default router
