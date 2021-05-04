import store from './store'
import { bugAdded, bugResolved, bugRemoved } from './actions'

store.dispatch(bugAdded('Bug 1'))
store.dispatch(bugAdded('Bug 2'))

store.dispatch(bugResolved(2))

console.log(store.getState())

store.dispatch(bugRemoved(1))

console.log(store.getState())
