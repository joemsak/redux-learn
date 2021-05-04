import _ from 'lodash'

export class Reducer {
  constructor(state, action) {
    this.state = state
    this.action = action
  }

  reduce() {
    return this._reducedState()
  }

  factory() {
    const reducer = this._getReducer()
    return new reducer(this.state, this.action)
  }

  _reducedState() {
    return this.state
  }

  _klassName() {
    return `${this._klassPrefix()}Reducer`
  }

  _klassPrefix() {
    return _.upperFirst(_.camelCase(this.action.type))
  }

  _getReducer() {
    return {
      BugAddedReducer,
      BugRemovedReducer,
      BugResolvedReducer,
    }[this._klassName()] || Reducer
  }
}

let lastId = 0

class BugAddedReducer extends Reducer {
  _reducedState() {
    return [
      ...this.state,
      {
        id: ++lastId,
        description: this.action.payload.description,
        resolved: false,
      }
    ]
  }
}

class BugRemovedReducer extends Reducer {
  _reducedState() {
    return this.state.filter(bug => bug.id !== this.action.payload.id)
  }
}

class BugResolvedReducer extends Reducer {
  _reducedState() {
    return this.state.map(
      bug => bug.id === this.action.payload.id ?
        { ...bug, resolved: true } :
        bug
    )
  }
}
