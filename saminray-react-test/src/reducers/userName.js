const usernameReducer = (state="",action)=>{
    switch(action.type) {
        case "LOG_IN":
           return action.userName
        case "LOG_OUT":
            return null
        default:
            return state
    }
}
export default usernameReducer