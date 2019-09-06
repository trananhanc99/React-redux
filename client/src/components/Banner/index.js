import React from 'react'
import { Row, Col } from 'reactstrap';
import "./index.css"
function index(props) {
    return (
        <div className="banner">
            <Row className="banner-text">
                <Col md="4">
                    <h1>{props.textBanner}</h1>
                    <p>{props.description}</p>
                    <button>{props.btn}</button>
                </Col>
                <Col md="8">
                    <div><img src={props.img} alt={props.alt}/></div>
                </Col>
            </Row>
        </div>
    )
}

index.propTypes = {

}

export default index

