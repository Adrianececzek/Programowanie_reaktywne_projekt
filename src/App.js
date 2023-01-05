import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./components/Home";
import './index.css';
import Details from "./components/Details";
import Add from "./components/Add";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (

    
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/details" element={<Details/>}></Route>
        <Route path="/add" element={<Add/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
       
       
  );
}

export default App;
