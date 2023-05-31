import {useEffect, useState} from "react";

export const LeftPanel = (props) => {

    const [data , setData] = useState('null');

    useEffect(() => {
        props.sendData(data);
    }, [data]);
    const adminController = (page) => {
        if (page === 'ProdManagement') {

        }
    }

    return (
        <div>
            <div className='leftPanelBody'>
                <div className='orta'>
                    <ul className='panelItems'>
                        <li onClick={() => {
                            setData('Prod');
                        }}>
                            Ürün Yönetimi
                        </li>
                        <li onClick={() => {
                            setData('Cust')
                        }}> Müşteri Yönetimi
                        </li>
                        <li onClick={() => {
                            setData('ProdAdd')
                        }}> Ürün Ekle
                        </li>
                        <li onClick={() => {
                            setData('Acc')
                        }}> Hesap Yönetimi
                        </li>
                        <li> Test</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}