import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPagee";
import { SignUp } from "./pages/SignupPagee";
import { Home } from "./pages/Home";
import { Headerr } from "./component/HeadComp";
import { LandingPage } from "./pages/LandingPage";
import { NoteConstruct } from "./pages/CreateNote";



function App() {
  return (
    <>
      <BrowserRouter> 
        <Headerr />
        <Routes >
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/createnote" element={<NoteConstruct />} />
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
