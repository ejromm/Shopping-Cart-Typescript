import  {CartItem, useShoppingCart } from '../context/ShoppingCartContext';
import { Stack, Button, Image } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { StoreItem } from '../App';
type CartItemProps = {
    item: CartItem
    data: StoreItem[]
}
export function CartItems({item, data}: CartItemProps) {
    const { decreaseCartQuantity, increaseCartQuantity, removeFromCart } = useShoppingCart(); 
    console.log('data in store')
    const cItem: StoreItem | null | undefined = data.find((i: StoreItem) => i.id === item.id); 
    if(cItem == null) return null; 
    return (
        <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
        <Image src={cItem.image} style={{ border: '1px solid black', width: "15%", maxHeight: "100px", objectFit:'contain'}} />
        <div style={{border: '1px solid black'}} className='me-auto'>
            <div style={{fontSize: '.8rem'}}>{cItem.title}{" "}</div>  
            <div className="text-muted" style={{ fontSize: '.7rem'}}>{formatCurrency(cItem.price)}</div>   
            
        </div>
        <div>
            <input type="button" value="-" onClick={item.quantity > 1 ? () =>decreaseCartQuantity(item.id) : () => removeFromCart(item.id)} />
             <input type="number"
             step="1"
             max=""
             value={item.quantity}
              />
            <input type="button" value="+"  onClick={() => increaseCartQuantity(item.id)} />
        </div>
        </Stack>
    )
}