import React from 'react'
import { Row, Col } from 'reactstrap';


//Import css
import "./index.css"
export default function index(props) {
    return (
        <div className="m-t">
            <Row>
                <Col md={props.lcol}>
                    <div className="Area-feature">
                        <div className="single_feature_post_text">
                            <p>{props.lquality}</p>
                            <h4>{props.lnamefeature}</h4>
                            <a className="xem-ngay" href="a">Xem ngay</a>
                            <img className="imgr" src={props.limg} alt={props.lalt} />
                        </div>                    
                    </div>
                </Col>
                <Col md={props.rcol}>
                    <div className="Area-feature">
                        <div className="single_feature_post_text">
                            <p>{props.rquality}</p>
                            <h4>{props.rnamefeature}</h4>
                            <a className="xem-ngay" href="a">Xem ngay</a>
                            <img src={props.rimg} alt={props.ralt} />
                        </div>
                    </div>
                </Col>
            </Row> 
        </div>
        
    )
}
