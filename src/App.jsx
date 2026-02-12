import React from 'react'
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import Settings from "./components/Settings";
import Contact from "./components/Contact";
import History from "./components/History";
import { Route, Routes} from 'react-router-dom';
import "./assets/style.css";
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Todo/>}/>
        <Route path={"/settings"} element={<Settings/>}/>
        <Route path={"/history"} element={<History/>}/>
        <Route path={"/contact"} element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App