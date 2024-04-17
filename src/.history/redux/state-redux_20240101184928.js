import {combineReducers, legacy_createStore as createStore } from 'redux'
import PointsTransferReducer from './PointsTransferReducer';
import NavigationReducer from './NavigationReducer';
import PhysicsEGEReducer from './PhysicsEGEReducer';





let reducers = combineReducers({
    PTRdom: PointsTransferReducer,
    NavSideDOM: NavigationReducer,
    PhysicsEGEDOM: PhysicsEGEReducer
})

let store = createStore( reducers)

window.store = store

export default store;