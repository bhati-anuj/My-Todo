import { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { AccountContext } from "../Context/AccountProvider";


function TodoNav() {
  const {account}  = useContext(AccountContext);
  
 

  return (
    <Navbar
      className="bg-body-tertiary"
      style={{ backgroundColor: "#176B87", height: "10vh" }}
    >
      <Container>
        <Navbar.Brand
          href="/home"
          style={{ color: "#001C30", fontSize: "2.5rem" }}
        >
          My Todo
        </Navbar.Brand>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <br/>
            <h6><a>Signin as: </a>{account.name}</h6>
            <a href="/signup">Log out</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TodoNav;
