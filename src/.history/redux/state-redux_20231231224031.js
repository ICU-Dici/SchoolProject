import {combineReducers, legacy_createStore as createStore } from 'redux'
import PointsTransferReducer from './PointsTransferReducer';
import NavigationReducer from './NavigationReducer';





let reducers = combineReducers({
    PTRdom: PointsTransferReducer,
    NavSideDOM: NavigationReducer,
})

let store = createStore( reducers)

window.store = store

export default store;