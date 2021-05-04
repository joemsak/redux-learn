import * as actions from './actionTypes'
import { ReducerFactory } from './reducerFactory'

export default function reducer(state = [], action) {
  const reducer = new ReducerFactory(state, action).factory()
  return reducer.reduce()
}
