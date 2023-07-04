import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useState, useEffect } from "react";
// create sticky navbar
export default function NavBar() {
    const {openCart} = useShoppingCart();
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    useEffect(() => {
        hamburgerOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll'; 
     }, [hamburgerOpen])
    // return bootstrap navbar with links to pages
    return( 
        <NavbarBs collapseOnSelect expand='md' sticky="top" className="bg-black d-flex align-items-start" style={{height: '10vh', paddingTop: '0'}} variant="dark">
            <Container fluid className="d-flex flex-row align-items-center p-0" style={{ height: '10vh'}} >
                <NavbarBs.Brand className="text-white d-flex align-items-center" href='/' style={{fontFamily: "Times New Roman", fontSize: '3rem', letterSpacing: '.3vw', height:'10vh', marginLeft: '5%'}}>FAKE STORE</NavbarBs.Brand>
                <NavbarBs.Toggle onClick={() => setHamburgerOpen(!hamburgerOpen)} aria-controls="responsive-navbar-nav" />
                <NavbarBs.Collapse  style={{ transition: 'none'}}  className="justify-content-end w-100"   id="responsive-navbar-nav">
                <Nav  className="gap-10%" style={{ fontFamily:'Roboto, sans-serif', fontSize:'1.2rem',  backgroundColor: hamburgerOpen ?  'rgb(0,0,0,.75)' : '', width: hamburgerOpen ? '100vw': '', height: hamburgerOpen ? '90vh' : '',  marginRight: '5%', alignItems: 'center', justifyContent: 'center'}} >
                    <Nav.Link className="text-white" to='/' as={NavLink}>Home</Nav.Link>
                    <Nav.Link className="text-white" to='/store' as={NavLink}>Shop</Nav.Link>
                    <Nav.Link onClick={openCart} className="text-white" eventKey=''>Cart</Nav.Link>
                </Nav>
                </NavbarBs.Collapse>
            </Container>
        </NavbarBs>
    ) 
}