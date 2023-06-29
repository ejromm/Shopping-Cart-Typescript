import { RateItem } from "../App";
import {  Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import convertRating from "../utilities/convertRating";

type StoreItemProps = {
    price: number, 
    rating: RateItem, 
    title: string,
    image: string,
}

export default function StoreCard({price, rating, title, image}: StoreItemProps) {
    console.log(price, rating, title, image );
    return (
        <Card className="h-100 d-flex justify-content-center border-0" style={{ paddingTop:'10%'}}>
            <Card.Img variant="top" src={image}  style={{objectFit: 'contain',  height:'40%', transition: 'transform .7s'}}  />
            <Card.Body>
             <Card.Text style={{fontFamily:'Lato, sans-serif' }}className="fw-light">{formatCurrency(price)}</Card.Text>   
             <Card.Text>{convertRating(rating.rate)}</Card.Text>
             <Card.Text className="fw-bold">{title}</Card.Text>
            </Card.Body>
        </Card>
    )
}