const tokenReducer = (state="",action)=>{
    switch(action.type){
        case "LOG_IN":
            return action.token
        case "LOG_OUT":
            return null
        default:
            return state
    }
}
export default tokenReducer