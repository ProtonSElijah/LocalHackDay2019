import React, {useEffect, useState} from 'react';

import './ResetBrowser.css';
import './App.css';

import Refresh from './img/refresh.png';

const App = () => {
    const [products, setProducts] = useState([]);
    const [qrData, setQrData] = useState("");

    const getProductsList = e => {
        let numberFN = qrData.slice(qrData.indexOf("fn") + 3, qrData.indexOf("&i"));
        let numberFD = qrData.slice(qrData.indexOf("i") + 2, qrData.indexOf("&fp"));
        let numberFPD = qrData.slice(qrData.indexOf("fp") + 3, qrData.indexOf("&n"));
        fetch(`http://192.168.43.76:8080/test?fn=${numberFN}&fd=${numberFD}&fpd=${numberFPD}`,
           {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        .then(response => response.json())
        .then(data => setProducts(data.document.receipt.items));

        e.preventDefault();
    };

    useEffect(() => {

    }, []);

  return (
      <div className="app">
          <div className="header">
            <p>Eation</p>
          </div>
          <div className="qrblock">
                <input type="text" value={qrData}
                    placeholder="Вставь QR с чека!"
                    onChange={(e) =>
                        setQrData(e.currentTarget.value)}>
                </input>
                <button onClick={getProductsList}>Добавить покупки</button>
                <button><img src={Refresh} alt="refresh" className="refreshbutton"/></button>
          </div>
          <div className="list">
              <ProductList products={products} />
          </div>
      </div>
  );
}

const Product = ({name, quantity}) => {
    return(
        <div className="product">
            <p>{name}</p>
            <p>{quantity}</p>
        </div>
    );
}

const ProductList = ({products}) => {
    return products.map(
        product =>
            <Product name={product.name} quantity={product.quantity} />
    );
}

export default App;
