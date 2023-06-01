import {LeftPanel} from "./LeftPanel";
import './admin.css'
import {Col, Row} from "react-bootstrap";
import {ProdManagement} from "./ProdManagement";
import {CustomerManagement} from "./CustomerManagement";
import {ProdAdd} from "./ProdAdd";
import {AccountManagement} from "./AccountManagement";
import {useState} from "react";

export const AdminHome = () => {

    const [upData, setUpData] = useState('');
    return (
        <div>
            <Row>
                <Col md={3}>
                    <LeftPanel sendData={(data) => {
                        setUpData(data)
                    }}/>
                </Col>
                <Col md={7}>
                    {upData === 'Acc' ? <AccountManagement/> : ''}
                    {upData === 'Prod' ? <ProdManagement/> : ''}
                    {upData === 'Cust' ? <CustomerManagement/> : ''}
                    {upData === 'ProdAdd' ? <ProdAdd/> : ''}
                </Col>
            </Row>
            <a></a>
        </div>
    );
}