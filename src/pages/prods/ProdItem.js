
import './prod.css'
import {Col, Row} from "react-bootstrap";
export const ProdItem = (props) => {
    return (
        <div className="prodItem" >
            <div className='d-flex justify-content-between'>
                <h5> {props.title} </h5>
                <div>
                    <span> ACTIVE </span>
                </div>
            </div>
            <hr />
            <p> {props.description}</p>
            <p className="right"> {props.price} ₺ </p>
            <br />
            <div className='d-flex justify-content-between'>
                <div>
                    <b> 2 pcs </b>
                </div>
                <div>
                    <b> {props.price} ₺ </b>
                </div>
                <div>
                    <b> info </b>
                </div>
            </div>
        </div>
    );
}