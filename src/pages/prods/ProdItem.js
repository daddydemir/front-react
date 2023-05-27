
import './prod.css'
import {Col, Row} from "react-bootstrap";
export const ProdItem = (props) => {
    return (
        <div className="prodItem" >
            <h5> {props.title} </h5>
            <hr />
            <p> {props.description}</p>
            <p className="right"> {props.price}TL </p>
            <br />
            <Row>
                <Col md={4} className='tab'>
                    <b> 2 pcs </b>
                </Col>
                <Col md={4}>
                    <b> {props.price} TL </b>
                </Col>
                <Col md={4}>
                    <b> info </b>
                </Col>
            </Row>
        </div>
    );
}