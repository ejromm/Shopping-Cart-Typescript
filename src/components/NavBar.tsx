import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// create sticky navbar
export default function NavBar() {
    // return bootstrap navbar with links to pages
    return( 
        <NavbarBs sticky="top" className="bg-black" style={{height: '10vh'}}>
            <Container fluid='md'>
                <NavbarBs.Brand className="text-white me-auto" href='/' style={{fontFamily: "Times New Roman", fontSize: '3rem', letterSpacing: '.3vw'}}>FAKE STORE</NavbarBs.Brand>
                <Nav className="gap-10%" style={{ fontFamily:'Roboto, sans-serif', fontSize:'1.2rem', gap:'2vw'}} >
                    <Nav.Link className="text-white" to='/' as={NavLink}>Home</Nav.Link>
                    <Nav.Link className="text-white" to='/store' as={NavLink}>Shop</Nav.Link>
                    <Nav.Link className="text-white" eventKey=''>Cart</Nav.Link>
                </Nav>
                
            </Container>
           
        </NavbarBs>
    ) 
}