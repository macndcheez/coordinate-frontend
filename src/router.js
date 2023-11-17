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
            <Route path='/event/new' element={<NewEvent />} />
            <Route path='/event/:id' />
            <Route path='/event/delete/:id' />
            <Route path='/event/edit/:id' />
        </Route>
        </Routes>
    </Router>
    )
  )

export default router

