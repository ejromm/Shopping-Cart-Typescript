import { Col, Container, Row, Button } from "react-bootstrap"
export default function Home() {
    // create homepage containing button that links to store page
    return (
        <Container  className='bg-black'  style={{ height: '90vh'}}>
            <Container style={{ height: '60%'}}>
                <Row  style={{ fontSize:'clamp(2rem, 4vw, 3.5rem)', fontFamily: 'Times New Roman' }} className="h-75">
                    <Col xs={12} md={6} lg={4} className=" h-100 d-flex align-items-center justify-content-center text-white" >
                    We're A Fake Store.
                    </Col>
                </Row>
                <Row  style={{ fontFamily: 'Times New Roman', fontSize:'clamp(1rem, 1.5vw,1.2rem)'}} className="h-25  text-white"><Col  xs={12} md={6} lg={4} className="h-100 d-flex align-items-center justify-content-center">A mock e-commerce site in React.</Col></Row>
            </Container>
            <Container  className="d-flex align-items-center justify-content-center" style={{ height: '40%'}}>
                <Row className="d-grid" style={{ height: '23%', width: '200px'}}>
                <Button size="lg" variant="outline-light rounded-0" className="d-flex align-items-center justify-content-center" href="/store" style={{fontFamily: 'Times New Roman', fontSize: '.9rem'}}>SHOP NOW</Button>
                </Row>
                
            </Container>
        </Container >
    )
      
    
}