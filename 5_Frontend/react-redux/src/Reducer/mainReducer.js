import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import reduxThunk from 'redux-thunk'
import UserReducer from './usersReducer'

const reducers = {
    users: UserReducer
}

const logger = createLogger()

const store = createStore(combineReducers(reducers), {}, applyMiddleware(reduxThunk, logger))

export  {
    store
}