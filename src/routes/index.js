import React from "react";
import { Routes, Route,} from "react-router-dom";
import HomePage from "../pages/HomePage";
import HanumanChalisaAppPrivacyPolicy from "../pages/HanumanChalisaAppPrivacyPolicy";
import LearnMore from "../pages/LearnMore";
import ContactUs from "../pages/ContactUs";

export default function RoutesServer() {
  return (
    <div style={{ width: "100%", backgroundColor:'red' }}>

        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/ByteCodeError" element={<HomePage />}></Route>
          <Route exact path="/HanumanChalisaAppPrivacyPolicy" element={<HanumanChalisaAppPrivacyPolicy />}></Route>
          <Route exact path="/LearnMore" element={<LearnMore />}></Route>
          <Route exact path="/ContactUs" element={<ContactUs />}></Route>
          {/* <Route exact path="/privacy" element={<PrivacyPolicy />}></Route> */}
        </Routes>

    </div>
  );
}