import { StoreItem } from "../App";
import {Row, Col} from 'react-bootstrap';
import StoreCard from "../components/StoreCard";
export default function Store( data: StoreItem[] ) {
   console.log(data);
   const d = Array.from(Object.values(data));
   console.log('dddd',d);
    return (
        
        <Row style={{marginTop: '1vh', marginBottom: '5vh'}} lg={4} md={2} sm={1} xs={1} className="g-4">
        {d.map((item, index) => (
            <Col style={{ height: '400px'}} key={index}><StoreCard {...item} /></Col>
        ))}
        </Row>
        

    )
}