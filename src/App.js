import "./App.css";
//Import route and our components
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from './components/Nav';
import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";

export default function App (props) {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      <Nav/>
      
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Education" element={<Education/>}/>
      <Route path="/Experience" element={<Experience/>}/>
    </Routes>
    </div>
  );
}

