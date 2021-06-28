import { applyMiddleware, combineReducers, createStore } from 'redux'

import thunk from 'redux-thunk' //thunk middleware
import { groupsListReducer } from './groupListReducer'

const reducersPush = combineReducers({
  groupsPart: groupsListReducer,
 
})

export type globalStateType = ReturnType<typeof reducersPush>

const store = createStore(reducersPush, applyMiddleware(thunk))
export default store
