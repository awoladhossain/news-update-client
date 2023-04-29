/* eslint-disable no-unused-vars */
import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Categorys from "../pages/Home/catagorys/Categorys";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayOut from "../layouts/LoginLayOut";
import Login from "../pages/Login/Login/Login";
import Regsister from "../pages/Login/Regsister/Regsister";
import PrivateRoute from "./PrivateRoute";
import TermsCondition from "../pages/shared/TermsCondition/TermsCondition";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Navigate to='/catagori/0'></Navigate>
    },
    {
        path:'/',
        element:<LoginLayOut></LoginLayOut>,
        children:[
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Regsister></Regsister>
            },
            {
                path:'/terms',
                element:<TermsCondition></TermsCondition>
            }
        ]
    },
    {
        path:'catagori',
        element: <Main></Main>,
        children:[
            {
                path:':id',
                element: <Categorys></Categorys>,
                loader:({params})=>fetch(`http://localhost:5000/catagories/${params.id}`)
            },
        ]
    },
    {
        path:'news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:':id',
                element:<PrivateRoute><News></News></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    },
])

export default router;