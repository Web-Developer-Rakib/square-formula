import React from "react";
import "./Values.css";
const Values = () => {
  return (
    <div className="values">
      <div>
        <h3 className="value-flex">
          <span>a=</span> <input type="number" className="value" />
        </h3>
        <h3 className="value-flex">
          <span>b=</span> <input type="number" className="value" />
        </h3>
      </div>
      <button class="button-70">Get Answers</button>
    </div>
  );
};

export default Values;
