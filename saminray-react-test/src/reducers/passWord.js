const passwordReducer = (state="",action)=>{
    switch(action.type) {
        case "LOG_IN":
            return action.password
        case "LOG_OUT":
            return ""
        default:
            return state
    }
}
export default passwordReducer