import { Offcanvas, Stack } from "react-bootstrap";
import { CartItems } from "./CartItems";
import { CartItem } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { StoreItem } from "../App";
// type for checking if shopping cart modal is set to open
type ShoppingCartProps = { isOpen: boolean};
export function ShoppingCart({isOpen}: ShoppingCartProps, data: StoreItem[]) {
    const { closeCart, cartItems } = useShoppingCart();
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end" >
        <Offcanvas.Header><Offcanvas.Title>Your Shopping Bag</Offcanvas.Title></Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
            {cartItems.map((item: CartItem) => (
                <CartItems key={item.id} {...item} {...data} />
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
