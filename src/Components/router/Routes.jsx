import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import WelcomePage from "../WelcomeImg";
import PasswordPage from "../Password";

function RouterCmp() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<WelcomePage />} /> {/* Default route */}
        <Route path="/password" element={<PasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RouterCmp;
