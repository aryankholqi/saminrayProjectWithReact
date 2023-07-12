import { useMutation } from "@tanstack/react-query";
import fetchLogin from "../api/loginApi/loginApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "../actions";
import Swal from "sweetalert2";

const useLoginMutation = (username, password, setUsername, setPassword) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const Swal = require('sweetalert2')

    const loginMutate = useMutation({
        mutationFn: () => {
            fetchLogin(username, password)
                .then((res) => {
                    dispatch(logIn(username, password, res.data.token))
                    navigate("/home")

                })
                .catch(err => {
                    if (err.response.status === 401) {
                        Swal.fire({
                            title: 'Error!',
                            text: 'Your Inputs are not valid',
                            icon: 'error',
                            confirmButtonText: 'Close'
                        })
                    }
                    setUsername("")
                    setPassword("")
                })
        }
    })
    return loginMutate
}
export default useLoginMutation