import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useState, useEffect } from "react";
// create sticky navbar
export default function NavBar() {
    const {openCart} = useShoppingCart();
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [isLarge, setIsLarge] = useState(window.matchMedia("(min-width: 768px)").matches); 
    useEffect(() => {
        console.log('large?',isLarge);
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', (e) => {
            if(e.matches) {
                setIsLarge(true); 
                
            }
             else {
                setIsLarge(false)
             }  
            
                
            
                
        });
        hamburgerOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll'; 
        console.log('large?',isLarge);
        console.log('hamburger', hamburgerOpen)
      }, [isLarge, hamburgerOpen]);
   
    // return bootstrap navbar with links to pages
    return( 
        <NavbarBs  collapseOnSelect expand='md' sticky="top" className="bg-black d-flex align-items-start" style={{height: '10vh', paddingTop: '0'}} variant="dark">
            <Container fluid className="d-flex flex-row align-items-center p-0" style={{ height: '10vh'}} >
                <NavbarBs.Brand className="text-white d-flex align-items-center" href='/' style={{fontFamily: "Times New Roman", fontSize: 'clamp(2rem, 3vw,3rem)', letterSpacing: '.3vw', height:'10vh', marginLeft: '5%'}}>FAKE STORE</NavbarBs.Brand>
                <NavbarBs.Toggle onClick={() => setHamburgerOpen(!hamburgerOpen)} aria-controls="responsive-navbar-nav" />
                <NavbarBs.Collapse  style={{  transition: 'none'}}  className="justify-content-end w-100"   id="responsive-navbar-nav">
                <Nav  className="gap-10%" style={{ fontFamily:'Roboto, sans-serif', fontSize:'1.2rem', backgroundColor: !isLarge && hamburgerOpen ?  'rgb(0,0,0,.75)' : '', width: !isLarge && hamburgerOpen ? '100vw' : '', height: !isLarge && hamburgerOpen ? '90vh' : '',  marginRight: '5%', alignItems: 'center', justifyContent: 'center'}} >
                    <Nav.Link onClick={() => setHamburgerOpen(!hamburgerOpen)} className="text-white" to='/' as={NavLink}>Home</Nav.Link>
                    <Nav.Link onClick={() => setHamburgerOpen(!hamburgerOpen)} className="text-white" to='/store' as={NavLink}>Shop</Nav.Link>
                    <Nav.Link onClick={() => {setHamburgerOpen(!hamburgerOpen); openCart();}} className="text-white" eventKey=''>Cart</Nav.Link>
                </Nav>
                </NavbarBs.Collapse>
            </Container>
        </NavbarBs>
    ) 
}