import React from "react";
import "../../index.css";

const Chart = (props) => {
  return (
    <div className="chart-container d-flex justify-content-center">
      <div className="chart animation">
        <p className="text-center">{props.percentage}</p>
        <div
          style={{
            background: "#363636",
            width: "30px",
            margin: "auto",
            height: `${100 - props.percentage}px`,
          }}
          className="resize"
        ></div>
        <div
          style={{
            background: "gold",
            width: "30px",
            height: `${props.percentage}px`,
            margin: "auto",
          }}
          className="chart-column"
        ></div>
        <h6 className="text-center">{props.label}</h6>
      </div>
    </div>
  );
};
export default Chart;
