import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDVF from "./pages/ProjectDVF";
import CV from "./pages/CV";
import Contact from "./pages/Contact";

import "./App.css";


function App() {

  return (

    <>

      <Navbar />


      <Routes>


        <Route 
          path="/" 
          element={<Home />} 
        />


        <Route 
          path="/projets" 
          element={<Projects />} 
        />


        <Route 
          path="/projet-dvf" 
          element={<ProjectDVF />} 
        />


        <Route 
          path="/cv" 
          element={<CV />} 
        />


        <Route 
          path="/contact" 
          element={<Contact />} 
        />


      </Routes>


    </>

  );

}


export default App;