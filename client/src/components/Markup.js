import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import Register from "./Pages/Signup/Register";
import Explore from "./Pages/Explore";
import Events from "./Pages/Events";
import Ideas from "./Pages/Ideas";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
const Markup = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="Explore" element={<Explore />} />
        <Route path="Events" element={<Events />} />
        <Route path="Ideas" element={<Ideas />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="AboutUs" element={<AboutUs />} />
      </Routes>
  )
}

export default Markup