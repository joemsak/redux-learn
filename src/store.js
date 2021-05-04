import { createStore } from 'redux'

import reducer from './reducer'
import { bugAdded, bugResolved } from './actions'

const store = createStore(reducer)

store.dispatch(bugAdded('Bug 1'))
store.dispatch(bugResolved(1))

console.log(store.getState())
