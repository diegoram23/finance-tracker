import { HashRouter, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"


import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"

function App() {

  return (
    <div className="app">
      <HashRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
        </Routes>
      </HashRouter>
     
    </div>
  )
}

export default App
