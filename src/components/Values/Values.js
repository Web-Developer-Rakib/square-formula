import React from "react";
import { useDispatch } from "react-redux";
import { aValue, bValue } from "../../Redux/actionCreators";
import "./Values.css";

const Values = () => {
  const dispatch = useDispatch();

  return (
    <div className="values">
      <div>
        <h3 className="value-flex">
          <span>a=</span>{" "}
          <input
            type="number"
            className="value"
            onChange={(e) => dispatch(aValue(e.target.value))}
          />
        </h3>
        <h3 className="value-flex">
          <span>b=</span>{" "}
          <input
            type="number"
            className="value"
            onChange={(e) => dispatch(bValue(e.target.value))}
          />
        </h3>
      </div>
      <button class="button-70">Get Answers</button>
    </div>
  );
};

export default Values;
