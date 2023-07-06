import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useState, useEffect } from "react";
// create sticky navbar
export default function NavBar() {
    const {openCart} = useShoppingCart();
    const [expanded, setExpanded] = useState(false);
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
        expanded ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll'; 
        console.log('large?',isLarge);
        console.log('hamburger', expanded)
      }, [isLarge, expanded]);
    
    // return bootstrap navbar with links to pages
    return( 
        <NavbarBs  collapseOnSelect expanded={expanded} expand='md' sticky="top" className="bg-black d-flex align-items-start" style={{height: '10vh', paddingTop: '0'}} variant="dark">
            <Container fluid className="d-flex flex-row align-items-center p-0" style={{ height: '10vh'}} >
                <NavbarBs.Brand className="text-white d-flex align-items-center" href='/' style={{fontFamily: "Times New Roman", fontSize: 'clamp(2rem, 3vw,3rem)', letterSpacing: '.3vw', height:'10vh', marginLeft: '5%'}}>FAKE STORE</NavbarBs.Brand>
                <NavbarBs.Toggle onClick={() => setExpanded(!expanded)} aria-controls="responsive-navbar-nav" />
                <NavbarBs.Collapse  style={{  transition: 'none', color: 'black'}}  className="justify-content-end w-100"   id="responsive-navbar-nav">
                <Nav onClick={() => setExpanded(!expanded)}   className="gap-10%" style={{ fontFamily:'Roboto, sans-serif', fontSize:'1.2rem', backgroundColor: !isLarge && expanded ?  'rgb(0,0,0,.75)' : '', width: !isLarge && expanded ? '100vw' : '', height: !isLarge && expanded ? '90vh' : '',  marginRight: '5%', alignItems: 'center', justifyContent: 'center'}} >
                    <Nav.Link   className="text-white" to='/' as={NavLink} eventKey='1'>Home</Nav.Link>
                    <Nav.Link  className="text-white" to='/store' as={NavLink} eventKey='2'>Shop</Nav.Link>
                    <Nav.Link  onClick={openCart} className="text-white" eventKey='3'>Cart</Nav.Link>
                </Nav>
                </NavbarBs.Collapse>
            </Container>
        </NavbarBs>
    ) 
}