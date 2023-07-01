import { ReactNode, createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { StoreItem } from "../App";
type CartProviderProps = {
    children: ReactNode,
    data: StoreItem[]
}
type ShoppingCartContext = {
    openCart: () => void; 
    closeCart: () => void; 
    cartQuantity: number; 
    cartItems: CartItem[];
    getItemQuantity: (id: number) => number, 
    increaseCartQuantity: (id: number) => void, 
    decreaseCartQuantity: (id: number) => void, 
    removeFromCart: (id: number) => void; 

}
export type CartItem = {
    id: number, 
    quantity: number
}
const ShoppingCartContext = createContext({} as ShoppingCartContext);
// eslint-disable-next-line react-refresh/only-export-components
export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}
export function ShoppingCartProvider({ children, data }: CartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shopping-cart', []);
    const [isOpen, setIsOpen] = useState(false);

    const openCart = () => setIsOpen(true); 
    const closeCart = () => setIsOpen(false); 
    const cartQuantity = cartItems.reduce((quantity: number, item: CartItem) => {
        return item.quantity + quantity; 
    },0)
    function getItemQuantity(id: number): number {
        return cartItems.find((item: CartItem) => {item.id === id})?.quantity || 0;
    }
    function increaseCartQuantity(id:number) : void {
        console.log('data', data)
        setCartItems((currItems: CartItem[]) => {
            if(currItems.find((item: CartItem) => item.id === id) == null) {
                return [...currItems, {id, quantity: 1}]
            } else {
                return currItems.map((item: CartItem) => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity + 1}; 
                    }
                    else return item; 
                })
            }
        }) 
        console.log('cartitems',cartItems)
    }
    function decreaseCartQuantity(id: number) : void {
        setCartItems((currItems: CartItem[]) => {
            if(currItems.find((item: CartItem) => {item.id === id})?.quantity === 1) {
                return currItems.filter(item => item.id !== id); 
            }
            else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1}; 
                    }
                    else return item; 
                })
            }
        })
    }
    function removeFromCart(id: number): void {
        setCartItems((currItems: CartItem[]) => {
            return currItems.filter((item: CartItem) => item.id !== id);
        })
    }
    return (<ShoppingCartContext.Provider value={{openCart, closeCart, getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartQuantity, cartItems}}>{children}<ShoppingCart isOpen={isOpen} data={data} /></ShoppingCartContext.Provider>)
}   