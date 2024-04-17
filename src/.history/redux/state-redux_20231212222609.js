import {combineReducers, legacy_createStore as createStore } from 'redux'
import PointsTransferReducer from './PointsTransferReducer';





let reducers = combineReducers({
    PTRdom: PointsTransferReducer,
})

let store = createStore( reducers)

window.store = store

export default store;