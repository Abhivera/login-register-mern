import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./login";
import Register from "./register"

const App = () => {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path="/login" element ={<Login/>} />
      <Route path="/register" element ={<Register/>} />
      </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App