import {Row} from "react-bootstrap";
import {CustomerItem} from "./CustomerItem";


export const CustomerManagement = () => {

    const change = (event) => {
        let value = event.target.value
        console.log(value);
    }

    return(
        <div className='customer-default'>
            <Row>
                <input type='text' placeholder='Search' onChange={change}/>
            </Row>
            <Row>
                <CustomerItem />
                <CustomerItem />
                <CustomerItem />
            </Row>
        </div>
    );
}