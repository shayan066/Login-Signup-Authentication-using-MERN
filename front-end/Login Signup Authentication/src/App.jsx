import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./Loginpage";
import RegistrationPage from "./RegistrationPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Loginpage />} />
          <Route path="registration" element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
