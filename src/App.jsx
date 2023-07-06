import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./Context/AccountProvider";
import Protected from "./Pages/Protected/Protected";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
        <AccountProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Protected Component={Home}/>} />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/*" element={<h1>404: Page not found</h1>} />
            </Routes>
          </BrowserRouter>
        </AccountProvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
