import React from "react";
import "../../index.css";

const Chart = (props) => {
  return (
    <div className="chart-container">
      <div className="chart animation">
        <p style={{textAlign:'center'}}>{props.percentage}</p>
        <div
          className="chart-column"
          style={{
            background: "gold",
            width: "30px",
            height: `${props.percentage}px`,
            margin: 'auto'
          }}
          
        ></div>
        <h6 style={{textAlign:'center'}}>{props.label}</h6>
      </div>
    </div>
  );
};
export default Chart;
