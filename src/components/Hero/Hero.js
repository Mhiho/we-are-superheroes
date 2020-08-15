import React from "react";

const hero = (props) => {
  return (
    <li className="list-group-item" onClick={props.click}>
      <img
        style={{ width: "100px" }}
        className="rounded float-left"
        alt="heroImage"
        src={props.src}
      />
      <div className="h-100 d-flex align-items-center justify-content-center">
        <h3>{props.name}</h3>
      </div>
    </li>
  );
};

export default hero;
