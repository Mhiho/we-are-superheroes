import React from "react";
import "../../index.css";
import Chart from "./Chart";

const heroDetails = (props) => {
  const bioElements = Object.values(props.bioels);
  const bioKeys = Object.keys(props.biokeys);

  const statsElements = Object.values(props.statels);
  const statsKeys = Object.keys(props.statkeys);
  return (
    <div
      style={{ color: "white" }}
      className="jumbotron fixed-position w-100 media-query-jumbotron"
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
        <div className="d-flex align-items-start justify-content-start flex-col media-query-class">
          <img style={{ width: "30%" }} src={props.src} alt="imageBigHero" />
          <div className="p-2 container-hero-details">
            <h1 className="text-center text-danger">{props.name}</h1>
            <div className="media-query-hero-details">
              <h3 className="d-flex align-items-center text-warning mr-4">
                Powers:
              </h3>
              {statsElements.map((el, index) => (
                <div
                  key={`powers-${el}-${index}`}
                  className="d-flex flex-col align-items-start additional-class"
                >
                  <Chart label={statsKeys[index]} percentage={el} />
                </div>
              ))}
            </div>
            <div className="biography-container">
              <div className="biography-subcontainer">
                <h3 className="text-warning">Biography: </h3>
                {bioElements.map((el, index) => (
                  <h4 className="m-1" key={`bio-${el}${index}`}>
                    <span className="m-1">{bioKeys[index]}: </span>
                    <span className="m-1">{el}</span>
                  </h4>
                ))}
              </div>
            </div>
          </div>
        </div>
      </p>
    </div>
  );
};
export default heroDetails;
