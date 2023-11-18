import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
  
import App from "./App"
import Login from "./components/Login"
import Signup from "./components/Signup"
import HomePage from "./pages/HomePage"
import NewEvent from "./pages/NewEvent"
import LandingPage from "./pages/LandingPage"
import { newEvent } from "./action"
import SpecificEvent from "./pages/SpecificEvent"

const router = createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={<App />}>
            <Route path="" element={<LandingPage/>} />
            <Route path="home" element={<HomePage />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path='/event/new' element={<NewEvent />} action={newEvent}/>
            <Route path='/event/:uniqueUrl' element={<SpecificEvent />}/>
            <Route path='/event/delete/:id' />
            <Route path='/event/edit/:id' />
        </Route>


    )
  )

export default router

