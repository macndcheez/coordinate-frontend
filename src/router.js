import { createBrowserRouter as Router, Routes, Route} from "react-router-dom"
  
import App from "./App"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import HomePage from "./pages/HomePage"
import NewEvent from "./pages/NewEvent"

const router = createBrowserRouter(
    createRoutesFromElements(
    <Router>
        <Routes>
        <Route path="/" element={<App />}>
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/home" element={<HomePage />} />
            <Route path='/newevent' element={<NewEvent />} />
        </Route>
        </Routes>
    </Router>
    )
  )

export default router

