import {Col, Row} from "react-bootstrap";

export const AccountManagement = () => {

    const handler = () => {

    }
    return (
        <div className='admin-default'>
            <h3 className='header'> ACCOUNT </h3>
            <hr/>
            <section>
                <Row>
                    <Col sm={6}>
                        <img src='https://avatars.githubusercontent.com/u/42716195?v=4' className='pp-image'/>
                        <h5> Mehmet Çakmaktaşı </h5>
                    </Col>
                    <Col sm={6}>
                        <section className='form-style'>
                            <form>
                                <h4> Password Update </h4>
                                <Row>
                                    <Col sm={12}>
                                        <input type='password' placeholder='old password'/>
                                    </Col>
                                    <Col sm={12}>
                                        <input type='password' placeholder='new password'/>
                                    </Col>
                                    <Col sm={12}>
                                        <input type='password' placeholder='confirm'/>
                                    </Col>
                                    <Col size={12} className='px-1'>
                                        <button type='button' onClick={handler}><span>Save</span></button>
                                    </Col>
                                </Row>
                            </form>
                        </section>
                    </Col>
                </Row>

            </section>
        </div>
    );
}