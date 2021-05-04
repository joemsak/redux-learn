import store from './store'
import { bugAdded, bugResolved, bugRemoved } from './actions'

store.dispatch(bugAdded('Bug 1'))
store.dispatch(bugAdded('Bug 2'))

console.log('Added 2 bugs', store.getState())

store.dispatch(bugResolved(2))

console.log('Resolved bug ID 2', store.getState())

store.dispatch(bugRemoved(1))

console.log('Removed bug ID 1', store.getState())
