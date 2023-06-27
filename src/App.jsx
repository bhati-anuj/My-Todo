import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./Context/AccountProvider";

function App() {
  const clientId =
  "811145331233-85k4g2illk070o1g5rrtk9df7eis8uvu.apps.googleusercontent.com";
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <AccountProvider>
        <BrowserRouter>
         
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
         
        </BrowserRouter>
        </AccountProvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
