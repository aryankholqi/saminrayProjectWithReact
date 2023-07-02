const userIdReducer = (state="0",action)=>{
    switch(action.type) {
        case "GET_ID":
            return action.id
        default:
            return state
    }
}
export default userIdReducer