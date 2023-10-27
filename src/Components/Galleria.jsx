import { Component } from "react";
import { Col, Row } from "react-bootstrap";

class Galleria extends Component{
    
render(){
    return(
        <div>
            <h4 class="text-white mt-5 ms-4">{this.props.title}</h4>
            <Row className="ms-3">
                <Col xl={2}>
                <img src="assets/1.png" alt="img-film" />
                </Col>
                <Col xl={2}>
                <img src="assets/2.png" alt="img-film" />
                </Col >
                <Col xl={2}>
                <img src="assets/3.png" alt="img-film" />
                </Col>
                <Col xl={2}>
                <img src="assets/4.png" alt="img-film" />
                </Col>
                <Col xl={2}>
                <img src="assets/5.png" alt="img-film" />
                </Col >
                <Col xl={2}>
                <img src="assets/6.png" alt="img-film" />
                </Col>
                
            </Row>
            
        </div>
    )
}
}

export default Galleria