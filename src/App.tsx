import { useState } from "react";
import { RegisterationPage } from "./pages/registration";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterationPage />} />
        {/* <Route path="*" element={<NotFound />} />  */}
      </Routes>
    </Router>
  );
}

export default App;
