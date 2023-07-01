import { Offcanvas, Stack } from "react-bootstrap";
import { CartItems } from "./CartItems";
import { CartItem } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { StoreItem } from "../App";
import { useState, useEffect } from "react";
// type for checking if shopping cart modal is set to open
type ShoppingCartProps = { 
    isOpen: boolean
    data: StoreItem[]
};
export function ShoppingCart({isOpen, data}: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart();
    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 992px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(max-width: 992px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);
    
    console.log(matches);
      
    return (
        <Offcanvas style={{width: matches ? '100%': '30%'}}  show={isOpen} onHide={closeCart} placement="end" >
        <Offcanvas.Header closeButton><Offcanvas.Title>Your Shopping Bag</Offcanvas.Title></Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
            {cartItems.map((item: CartItem) => (
                <CartItems key={item.id} data={data} item={item} />
            ))}
            <div className="ms-auto fw-bold fs-5">Total: {formatCurrency(cartItems.reduce((total, cartItem) => {
                const item = data.find(item => item.id === cartItem.id); 
                return total + (item?.price || 0) * cartItem.quantity;
            },0 ))} </div>
            </Stack>
        </Offcanvas.Body>
        </Offcanvas>    
    )

}


