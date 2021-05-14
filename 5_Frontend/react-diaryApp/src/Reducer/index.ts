import { combineReducers, createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { EventReducer } from './EventReducer'

import { AuthReducer } from './AuthReducer'
import { UserReducer } from './UserReducer'

import { createLogger } from 'redux-logger'

const rootReducer = combineReducers({
    EventReducer,
    AuthReducer,
    UserReducer
})

const logger = createLogger({
    collapsed: true
})

export type RootState = ReturnType<typeof rootReducer>

export default function configStore(){
    let store = createStore(rootReducer, {}, applyMiddleware(logger, reduxThunk))

    return store
}