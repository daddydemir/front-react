import {Col, Row} from "react-bootstrap";


export const ProdAdd = () => {

    const handler = () => {

    }

    return (
        <div className='advertAdd'>
            <h3 className='header'> ADVERT ADD </h3>
            <hr />
            <section className='form-style'>
                <form onSubmit={handler}>
                    <Row>
                        <Col size={12} sm={12} className='px-1'>
                            <input type='text' placeholder='Title'/>
                        </Col>
                        <Col size={12} sm={6} className='px-1'>
                            <input type='number' placeholder='Max Capacity'/>
                        </Col>
                        <Col size={12} sm={6} className='px-1'>
                            <input type='number' placeholder='Stock'/>
                        </Col>
                        <Col size={12} sm={6} className='px-1'>
                            <input type='number' placeholder='Price'/>
                        </Col>
                        <Col size={12} sm={6} className='px-1'>
                            <input type='number' placeholder='Month Size'/>
                        </Col>
                        <Col size={12} className='px-1'>
                            <textarea rows='6' placeholder='Description' />
                            <button type='submit'> <span>Save</span></button>
                        </Col>
                    </Row>
                </form>
            </section>

        </div>
    );
}