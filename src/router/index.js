import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import Login from "../pages/Login";
import { Navigate } from "react-router-dom";

export const privateRoutes = [
    {path: "/about", component: <About />, exact: true},
    {path: "/", component: <Posts />, exact: true},
    {path: "/posts/:id", component: <PostIdPage />, exact: true},
    {path: "error", component: <Error />, exact: true},
    {path: "*", component: <Navigate to="/error" replace />, exact: true},
];

export const publicRoutes = [
    {path: "/login", component: <Login />, exact: true},
    {path: "*", component: <Navigate to="/login" replace />, exact: true},
];