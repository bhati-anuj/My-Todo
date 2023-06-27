import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { AccountContext } from '../Context/AccountProvider';


function TodoNav() {

 const {account} = useContext(AccountContext);

  return (
    <Navbar className="bg-body-tertiary" style={{backgroundColor:'#176B87',height:'10vh'}}>
      <Container>
        <Navbar.Brand href="#home">My Todo</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{account.name}</a>
            <img src={account.picture}  alt='dp'/>
         

          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TodoNav;