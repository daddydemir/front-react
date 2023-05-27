import React from "react";
import {Banner} from "../../components/Banner"
import {Skills} from '../../components/Skills'
import {Contact} from "../../components/Contact";

class ProductList extends React.Component {
    render() {
        return (
            <div>
                <h1> Hello World </h1>
                <Banner />
                <Skills />
                <Contact />
            </div>
        )
    }
}

export default ProductList;