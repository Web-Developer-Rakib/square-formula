import React from "react";
import { useSelector } from "react-redux";
import "./OldFormula.css";

const OldFormula = () => {
  const a = useSelector((state) => state.aReducer.a);
  const b = useSelector((state) => state.bReducer.b);
  const answer = useSelector((state) => state.answersReducer.ans);

  return (
    <div className="oldFormula">
      <h3>{a === "" ? "a" : a}</h3>
      <sup>
        <h3>2</h3>
      </sup>
      <h3>+ 2.</h3>
      <h3>{a === "" ? "a" : a}.</h3>
      <h3>{b === "" ? "b" : b}</h3>
      <h3>+</h3>
      <h3>{b === "" ? "b" : b}</h3>
      <sup>
        <h3>2</h3>
      </sup>
      <h3>=</h3>
      <h3>{answer}</h3>
    </div>
  );
};

export default OldFormula;
