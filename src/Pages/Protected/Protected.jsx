import React, { useContext, useEffect } from "react";
import { AccountContext } from "../../Context/AccountProvider";
import { useNavigate } from "react-router-dom";
import userLocalStorage from "../../userLocalStorage";

function Protected({ Component }) {
  const { account } = useContext(AccountContext);
  const navigate = useNavigate();

  const user = userLocalStorage();
  console.log(account.email);
  console.log(user);

  console.log("useEffect mai",user[0].email);
  useEffect(()=>{

      if (user.email === "") {
          navigate("/Signin");
        } else {
            navigate("/");
        }
        
    },[])

  return (
    <div>
      <Component />
    </div>
  );
}

export default Protected;
