import { combineReducers } from "redux"
import usernameReducer from "./userName"
import tokenReducer from "./token"
import userIdReducer from "./userID"
import passwordReducer from "./passWord"

const allReducers = combineReducers({
    userName:usernameReducer,
    passWord:passwordReducer,
    token:tokenReducer,
    id:userIdReducer,
})
export default allReducers