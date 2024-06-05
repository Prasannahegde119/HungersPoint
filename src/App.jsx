import React from "react";
import Homepage from "./Components/Pages/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./Components/Pages/Events/Events";
import Franchise from "./Components/Franchise/Franchise";
import Careers from "./Components/Pages/Careers/Careers";
import ContactUs from "./Components/Pages/Contactus/ContactUs";
import OurStory from "./Components/Pages/Ourstory/OurStory";
import Menu from "./Components/Pages/Menu/Menu";
import Notfound from "./Components/Pages/NotFound/Pagenotfound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="events" element={<Events />} />
        <Route path="franchise" element={<Franchise />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="ourstory" element={<OurStory />} />
        <Route path="menu" element={<Menu />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
