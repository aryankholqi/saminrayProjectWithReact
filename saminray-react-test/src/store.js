import allReducers from "./reducers";
import { createStore, applyMiddleware } from "redux"
import ReduxThunk from "redux-thunk"
import { persistStore,persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: "persist-key",
    storage,
}
const persistedReducer = persistReducer(persistConfig,allReducers)
const store = createStore(persistedReducer,applyMiddleware(ReduxThunk))
const persistor = persistStore(store)
export default store
export {persistor}