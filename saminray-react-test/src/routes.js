import Login from "./components/Login/Login"
import Home from "./components/Home/Home"
import PrivateRoutes from "./components/PrivateRoutes"
import NotFound from "./components/NotFound"
import Users from "./components/Users/Users"
import MainUser from "./components/Users/MainUser"
import Posts from "./components/Posts/Posts"
import Profile from "./components/Profile/Profile"

const routes = [
    {path:"/",element:<Login/>},
    {path:"home",element:<PrivateRoutes><Home/></PrivateRoutes>},
    {path:"users",element:<PrivateRoutes><Users/></PrivateRoutes>},
    {path:"users/:id",element:<PrivateRoutes><MainUser/></PrivateRoutes>},
    {path:"posts",element:<PrivateRoutes><Posts/></PrivateRoutes>},
    {path:"profile",element:<PrivateRoutes><Profile/></PrivateRoutes>},
    {path:"*",element:<NotFound/>},
]
export default routes