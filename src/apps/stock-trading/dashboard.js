import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { StockChart } from './stock-chart';
import { useStockHistory } from './use-stock-history';
import { useUserInfo } from './use-user-info';
import './stock.scss';

export const DashboardStocks = () => {
  const [numberOfSharesValue, setNumberOfSharesValue] = useState(0);
  const [userInfo, setUserInfo] = useUserInfo();
  const { cashValue, sharesValue, numberOfSharesOwned } = userInfo || {};
  const stockHistory = useStockHistory();
  const prices = Object.values(stockHistory);

  const buyShares = async () => {
    if (numberOfSharesValue === 0) {
      toast('No shares added');
      return;
    }
    const response = await fetch(
      `${process.env.REACT_APP_API}/stock-trading/stocks/buy`,
      {
        method: 'post',
        body: JSON.stringify({ numberOfShares: numberOfSharesValue }),
        headers: { 'Content-Type': 'application/json' },
      },
    );
    const updatedUserInfo = await response.json();
    setUserInfo(updatedUserInfo);
    toast(`Successfully bought ${numberOfSharesValue} shares of TSLA`);
    setNumberOfSharesValue(0);
  };

  const sellShares = async () => {
    if (numberOfSharesValue === 0) {
      toast('No shares sold');
      return;
    }
    const response = await fetch(
      `${process.env.REACT_APP_API}/stock-trading//stocks/sell`,
      {
        method: 'post',
        body: JSON.stringify({ numberOfShares: numberOfSharesValue }),
        headers: { 'Content-Type': 'application/json' },
      },
    );
    const updatedUserInfo = await response.json();
    setUserInfo(updatedUserInfo);
    toast(`Successfully sold ${numberOfSharesValue} shares of TSLA`);
    setNumberOfSharesValue(0);
  };

  return (
    <div className="stocks">
      <h2 className="section-heading">Stock Trading App</h2>
      {Object.keys(stockHistory).length > 0 ? (
        <div className="centered-container">
          <StockChart
            xValues={Object.keys(stockHistory)}
            yValues={Object.values(stockHistory)}
          />
          <div className="financial-info-section">
            <div className="info-item">
              Current TSLA Share Price: ${prices[prices.length - 1]}
            </div>
            <div className="info-item">
              You currently own {numberOfSharesOwned} shares
            </div>
            <div className="info-item">Cash Balance: ${cashValue}</div>
            <div className="info-item">Portfolio Value: ${sharesValue}</div>
            <div className="info-item">
              Total Value: ${cashValue + sharesValue}
            </div>
            <input
              type="number"
              value={numberOfSharesValue}
              className="d-block w-100 mb-3"
              onChange={(e) => setNumberOfSharesValue(+e.target.value)}
            />
            <div>
              <button className="buy-button" onClick={buyShares}>
                Buy
              </button>
              <button className="sell-button" onClick={sellShares}>
                Sell
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
