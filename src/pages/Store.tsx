import { StoreItem } from "../App";
import {Row, Col, Container} from 'react-bootstrap';
import StoreCard from "../components/StoreCard";
// create page that displays list of store items
export default function Store( data: StoreItem[] ) {
  
   // convert data import into array containing store items
   const d = Array.from(Object.values(data));
    //return repsonsive bootstrap grid displaying a store card for each grid item
    return (
        <Container  style={{maxWidth:'100%', zIndex: '-1'}}>
        <Row style={{paddingTop: '1%',paddingBottom:'5%'}} lg={4} md={2} sm={1} xs={1} className="g-4">
        {d.map((item, index) => (
            <Col style={{ height: '400px'}} key={index} ><StoreCard  {...item} /></Col>
        ))}
        </Row>
        </Container>
        

    )
}