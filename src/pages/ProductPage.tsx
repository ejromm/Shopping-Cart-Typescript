import { Container, Row, Col, Card, Button } from "react-bootstrap"; 
import { RateItem } from "../App";
import {Image } from 'react-bootstrap';
import convertRating from "../utilities/convertRating";
import { formatCurrency } from "../utilities/formatCurrency";
type ProductPageProps = {
    price: number, 
    rating: RateItem, 
    category: string, 
    image: string, 
    title: string,
    description: string,
}
export default function ProductPage({price, rating, category, image, title, description} : ProductPageProps) {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '90vh'}}>
            <Row  className="h-75 w-100 bg-flex">
            <Col className="col-5 d-flex justify-content-center align-items-center" >
                <Image  style={{height: '80%', maxWidth: '70%', objectFit:'contain'}}  src={image}/>
            </Col>
            <Col className="col-7 d-flex align-items-center">
                <Card  style={{border:'none', height: '80%',fontFamily: 'Montserrat'}} >
                <Card.Body className="d-flex flex-column justify-content-center">
                <Card.Title style={{ fontWeight:'700'}}>{title}</Card.Title>
                <Card.Text className="mb-4">{convertRating(rating.rate)} {`(${rating.count})`}</Card.Text>
                <Card.Subtitle style={{borderBottom: '1.5px solid black'}} className="fs-5 pb-4">{formatCurrency(price)}</Card.Subtitle>
                <Card.Text className="pt-4" color="gray">Category: <i style={{marginLeft:'1%' ,color:'black'}}>{category[0].toUpperCase() + category.slice(1)}</i></Card.Text>
                <Card.Text style={{fontFamily:"Lato"}}>{description}</Card.Text>
                <Button className="align-self-center" variant='dark' size="lg"><span>ADD TO CART</span></Button>
                </Card.Body>
                

                </Card>
            </Col>
            </Row>
        </Container>
    )
}