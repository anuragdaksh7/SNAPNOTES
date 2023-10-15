import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPagee";
import { SignUp } from "./pages/SignupPagee";



function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes >
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
