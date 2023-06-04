import {useEffect, useState} from "react";

export const LeftPanel = (props) => {

    const [data, setData] = useState('Prod');

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
                        <li className={data === 'Prod' ? 'bold' : ''} onClick={() => {
                            setData('Prod');
                        }}>
                            Ürün Yönetimi
                        </li>
                        <li className={data === 'Cust' ? 'bold' : ''} onClick={() => {
                            setData('Cust')
                        }}> Müşteri Yönetimi
                        </li>
                        <li className={data === 'ProdAdd' ? 'bold' : ''} onClick={() => {
                            setData('ProdAdd')
                        }}> Ürün Ekle
                        </li>
                        <li className={data === 'Acc' ? 'bold' : ''} onClick={() => {
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