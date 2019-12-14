import React, {useEffect, useState} from 'react';

import './ResetBrowser.css';
import './App.css';

import Refresh from './img/refresh.png';

const App = () => {
    const [products, setProducts] = useState(null);
    const [qrData, setQrData] = useState("");

    const getProductsList = e => {
       /* console.log(qrData.slice(qrData.indexOf("fn"), qrData.length));
        let numberFN = qrData.slice(qrData.indexOf("fn") + 3, qrData.indexOf("&i"));
        let numberFD = qrData.slice(qrData.indexOf("i") + 2, qrData.indexOf("&fp"));
        let numberFPD = qrData.slice(qrData.indexOf("fp") + 3, qrData.indexOf("&n"));
        console.log(numberFN);
        console.log(numberFD);
        console.log(numberFPD);
        fetch(`https://proverkacheka.nalog.ru:9999/v1/inns/*//*kkts*//*/fss/${numberFN}/tickets/${numberFD}?fiscalSign=${numberFPD}&sendToEmail=no`,
           {
                method: "GET",
                mode: "cors",
                credentials: "same-origin",
                headers: {
                    "Authorization": 'Basic '+btoa(`+79291007693:236739`),
                    'Content-Type': 'application/json',
                     "device-id": "",
                    "device-os": ""
                },
            })
        .then(response => response.json())
        .then(data => console.log(data));*/

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
           <Product name="Лапша" quantity="2" />
           <Product name="Лапша" quantity="2" />
           <Product name="Лапша" quantity="2" />
           <Product name="Лапша" quantity="2" />
           <Product name="Лапша" quantity="2" />
           <Product name="Лапша" quantity="2" />
           <Product name="Лапша" quantity="2" />
           <Product name="Лапша" quantity="2" />
           <Product name="Лапша" quantity="2" />
           <Product name="Лапша" quantity="2" />
           <Product name="Лапша" quantity="2" />
           <Product name="Лапша" quantity="2" />
           <Product name="Лапша" quantity="2" />
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

export default App;
