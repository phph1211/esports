import { UserSchoolPage } from "./pages/userSchool";
import { UserNamePage } from "./pages/userName";
import { UserCodePage } from "./pages/userCode";
import { FinishPage } from "./pages/finish";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

axios
  .get("https://esports.hanum.us/luckydraw/getWinner", {
    headers: {
      "get-winner-key": import.meta.env.VITE_API_SECRET_KEY,
    },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    if (error.response) {
      console.error("Error Data:", error.response.data);
    } else {
      console.error(error);
    }
  });

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserSchoolPage />} />
        <Route path="/userName" element={<UserNamePage />} />
        <Route path="/userCode" element={<UserCodePage />} />
        <Route path="/finish" element={<FinishPage />} />
      </Routes>
    </Router>
  );
}

export default App;
