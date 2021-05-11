import { combineReducers, createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { UserReducer } from './UserStore'

const rootReducer = combineReducers({
    UserReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default function configStore(){
    let store = createStore(rootReducer, {}, applyMiddleware(reduxThunk))

    return store
}