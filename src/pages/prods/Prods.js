import {useState, useEffect} from "react"
import {Col, Container, Row} from "react-bootstrap";
import {ProdItem} from "./ProdItem";

export const Prods = () => {


    return (
        <section>
            <Container>
                <Row>
                    <Col md={4}>
                        <ProdItem
                            title='VPN-1'
                            price='120'
                            description='açıklama kısmı'
                        />
                    </Col>

                    <Col md={4}>
                        <ProdItem
                            title='VPN-2'
                            price='120'
                            description='açıklama kısmı'
                        />
                    </Col>

                    <Col md={4}>
                        <ProdItem
                            title='VPN-3'
                            price='120'
                            description='açıklama kısmı'
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}