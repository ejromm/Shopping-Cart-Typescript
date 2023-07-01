import  {CartItem, useShoppingCart } from '../context/ShoppingCartContext';
import { Stack, Image } from "react-bootstrap";
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
        <Stack direction='horizontal' as={'div'} className='d-flex justify-content-between' >
        <Image src={cItem.image} style={{width: "20%", maxHeight: "150px", objectFit:'contain'}} />
        <div style={{maxWidth:'50%', width:'50%', minWidth:'50%'}} >
            <div style={{fontSize: '.8rem', }}>{cItem.title}{" "}</div>  
            <div className="text-muted" style={{ fontSize: '.7rem'}}>{formatCurrency(cItem.price)}</div>   
            
        </div>
        <div className='d-flex justify-content-center' style={{width:'25%'}}>
            <input className='bg-white border-0' type="button" value="-" onClick={item.quantity > 1 ? () =>decreaseCartQuantity(item.id) : () => removeFromCart(item.id)} />
             <input  style={{width:'30px', fontSize: '.7rem'}} type="text"
             readOnly
             inputMode='numeric'
             value={item.quantity}
             className='text-center'
             pattern="[0-9]"
              />
            <input className='bg-white border-0' type="button" value="+"  onClick={() => increaseCartQuantity(item.id)} />
        </div>
        </Stack>
    )
}