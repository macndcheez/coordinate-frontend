import { createBrowserRouter, createRoutesFromElements, Router, Routes, Route} from "react-router-dom"
  
import App from "./App"
import Login from "./components/Login"
import Signup from "./components/Signup"
import HomePage from "./pages/HomePage"
import NewEvent from "./pages/NewEvent"
import LandingPage from "./pages/LandingPage"

const router = createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={<App />}>
            <Route path="" element={<LandingPage/>} />
            <Route path="home" element={<HomePage />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path='/event/new' element={<NewEvent />} />
            <Route path='/event/:id' />
            <Route path='/event/delete/:id' />
            <Route path='/event/edit/:id' />
        </Route>


    )
  )

export default router

