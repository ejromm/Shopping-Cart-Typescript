import  {CartItem, useShoppingCart } from '../context/ShoppingCartContext';
import { Stack, Button, Image } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { StoreItem } from '../App';

export function CartItems(item: CartItem, data:StoreItem[] ) {
    const { removeFromCart } = useShoppingCart(); 
    const cItem: StoreItem | null | undefined = data.find(i => i.id === item.id); 
    if(cItem == null) return null; 
    return (
        <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
        <Image src={cItem.image} style={{ width: "125px", height: "75px", objectFit: "cover"}} />
        <div className='me-auto'>
            <div>{cItem.title}{" "} {item.quantity > 1 && (<span className="text-muted" style={{fontSize: '.65rem'}}>{item.quantity}x</span>)}</div>  
            <div className="text-muted" style={{ fontSize: '.7rem'}}>{formatCurrency(cItem.price)}</div>   
        </div>
        <div>{formatCurrency(cItem.price * item.quantity)}</div>
        <Button  variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
        </Stack>
    )
}