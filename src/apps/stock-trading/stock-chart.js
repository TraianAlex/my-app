import React from 'react';
import Plot from 'react-plotly.js';

export const StockChart = ({ xValues, yValues }) => (
  <Plot
    data={[
      {
        x: xValues,
        y: yValues,
        type: 'scatter',
        mode: 'lines',
        marker: { color: 'green' },
      },
    ]}
    layout={{ autosize: true, title: 'Tesla Stock History' }}
    useResizeHandler={true}
    style={{ width: '100%', height: '100%' }}
  />
);
