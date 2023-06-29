import { RateItem } from "../App";
import { Button, Card } from "react-bootstrap";

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
            <Card.Img variant="top" src={image}  style={{objectFit: 'contain', height:'40%'}}  />
            <Card.Body>
             <Card.Text>{price}</Card.Text>   
             <Card.Text>{rating.rate}</Card.Text>
             <Card.Text>{title}</Card.Text>
            </Card.Body>
        </Card>
    )
}