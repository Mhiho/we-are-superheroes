import React from "react";
import "../../index.css";
import Chart from "./Chart";

const heroDetails = (props) => {
  const bioElements = Object.values(props.bioels);
  const bioKeys = Object.keys(props.biokeys);

  const statsElements = Object.values(props.statels);
  const statsKeys = Object.keys(props.statkeys)
  return (
    <div
      style={{ color: "white" }}
      className="jumbotron fixed-position h-100 w-100"
    >
      <h1 className="positioned-x">
        <span
          style={{ cursor: "pointer" }}
          className="float-right"
          onClick={props.close}
        >
          ✘
        </span>
      </h1>
      <p className="lead">
          <h1>{props.name}</h1>
        <div className="d-flex align-items-start justify-content-start flex-col">
          <img style={{ width: "30%" }} src={props.src} alt="imageBigHero" />
          <div className="p-2 m-2">
              <div className="d-flex flex-row">

          <h3 className="d-flex align-items-center">Powers: </h3>  
          {statsElements.map((el, index) => (
              <div className="d-flex flex-col w-100 align-items-start additional-class">
                  <Chart label={statsKeys[index]} percentage={el} />
              </div>
            ))}
          </div>
          <div>
            <h3>Biography: </h3>
            {bioElements.map((el, index) => (
                <h4>
                <span>{bioKeys[index]}: </span>
                {el}
              </h4>
            ))}
          </div>
            </div>
        </div>
      </p>
    </div>
  );
};
export default heroDetails;
