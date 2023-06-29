import { Col, Container, Row, Button } from "react-bootstrap"
export default function Home() {
    // create homepage containing button that links to store page
    return (
        <Container  className='bg-black'  style={{ height: '90vh'}}>
            <Row className=" d-flex flex-column" style={{ height: '60%'}}>
                <Col style={{ fontSize:'3.5rem', fontFamily: 'Times New Roman'}} className="h-75 col-3 d-flex align-items-center text-white">
                    We're <br />
                    A Fake
                    Store.
                </Col>
                <Col style={{ fontFamily: 'Times New Roman', fontSize:'1.2rem'}} className="h-25 w-25 text-white d-flex align-items-center">A mock e-commerce site in React.</Col>
            </Row>
            <Row  className="align-items-center justify-content-center" style={{ height: '40%'}}>
                <Col className="col-3 d-grid" style={{ height: '23%'}}>
                <Button size='lg' variant="outline-light  d-flex align-items-center justify-content-center" className="rounded-0" href="/store" style={{fontFamily: 'Times New Roman', fontSize: '.9rem'}}>SHOP NOW</Button>
                </Col>
                
            </Row>
        </Container >
    )
      
    
}