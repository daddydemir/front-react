import {Col, Row} from "react-bootstrap";


export const CustomerItem = () => {

    return (
        <Col sm={4}>
            <div className='admin-customer'>
                <img src='https://avatars.githubusercontent.com/u/42716195?v=4' className='customer-image' />
            <hr />
                <h4> CustomerName</h4>
            </div>
        </Col>
    );
}