import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Answer, aValue, bValue } from "../../Redux/actionCreators";
import "./Values.css";

const Values = () => {
  const dispatch = useDispatch();
  const a = useSelector((state) => state.aReducer.a);
  const b = useSelector((state) => state.bReducer.b);

  const abSum = parseFloat(a) + parseFloat(b);

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
      <button class="button-70" onClick={() => dispatch(Answer(abSum))}>
        Get Answers
      </button>
    </div>
  );
};

export default Values;
