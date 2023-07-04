import axios from "axios"

const fetchLogin = (userName, passWord) => {
    
    return axios({
        url: "https://fakestoreapi.com/auth/login",
        method: "POST",
        data: {
            username: userName,
            password: passWord,
        }
    })
}
export default fetchLogin