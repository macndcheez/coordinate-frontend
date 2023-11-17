import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Routes,
    Redirect,
} from "react-router-dom"
  
import App from "./App"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import HomePage from "./pages/HomePage"

const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route path=""  />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/home" element={<HomePage />} />

    </Route>
    )
  )

export default router

