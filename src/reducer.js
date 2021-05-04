import * as actions from './actionTypes'
import { Reducer } from './reducerFactory'

export default function reducer(state = [], action) {
  const reducer = new Reducer(state, action).factory()
  return reducer.reduce()
}
