import { RateItem } from "../App";
import {  Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import convertRating from "../utilities/convertRating.tsx";
import { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext.tsx";
// create type for nesessary store item info
type StoreItemProps = {
    price: number, 
    rating: RateItem, 
    title: string,
    image: string,
}
// create store card component
export default function StoreCard({price, rating, title, image}: StoreItemProps) {
    // handle store image expanding on hover
    const [isHover, setHover] = useState(false);
    const handleMouseEnter = () => {
        setHover(true);
    }
    const handleMouseLeave = () => {
        setHover(false);
    }
    // return bootstrap card 
    return (
        <Card className="h-100 d-flex justify-content-center border-0" as={'a'} href={`/store/${title.replace(/[^A-Za-z0-9]/g, ' ').replace(/\s+/g, '-').trim()}`} style={{paddingTop:'10%', textDecoration: 'none'}}>
            <Card.Img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} variant="top" src={image}  style={{objectFit: 'contain',  height:'40%', transition: 'transform .7s', transform: isHover ? 'scale(.9)': '' }}  />
            <Card.Body>
             <Card.Text style={{fontFamily:'Lato, sans-serif' }}className="fw-light">{formatCurrency(price)}</Card.Text>   
             <Card.Text>{convertRating(rating.rate)}</Card.Text>
             <Card.Text className="fw-bold">{title}</Card.Text>
            </Card.Body>
        </Card>
    )
}