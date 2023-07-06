import { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { AccountContext } from "../Context/AccountProvider";
import logo from "../assets/Color-background.png";
import { Link } from "react-router-dom";

function TodoNav() {
  const {account}  = useContext(AccountContext);
  
 

  return (
    <Navbar
      className="bg-body-tertiary"
      style={{ backgroundColor: "#176B87", height: "20vh" }}
    >
      <Container>
        <Navbar.Brand
          href="/"
          style={{ color: "#001C30", fontSize: "2.5rem" }}
        >
          <img src={logo} alt="Logo" style={{width:'150px',borderRadius:'50%'}}/>
        </Navbar.Brand>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{color:"white"}}>
            <br/>
            <h5>{account.name}</h5>
            <Button variant="light">
            <Link to={"/Signin"} style={{color:"black", textDecoration:'none'}}>Log out</Link>
            
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TodoNav;
