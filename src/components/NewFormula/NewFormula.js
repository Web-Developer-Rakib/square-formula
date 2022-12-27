import React from "react";
import { useSelector } from "react-redux";
import "./NewFormula.css";

const NewFormula = () => {
  const a = useSelector((state) => state.aReducer.a);
  const b = useSelector((state) => state.bReducer.b);
  const c = parseFloat(a) + parseFloat(b);

  const answer = useSelector((state) => state.answersReducer.ans);
  return (
    <div className="newFormula">
      <h3>
        <span>(</span>
        <span>{a === "" ? "a" : a}</span>
        <span>+</span>
        <span>{b === "" ? "b" : b}</span>
        <span>
          )<sup>2</sup>
        </span>
        <span>=</span>
        <span>{isNaN(c) ? "c" : c}</span>
        <sup>2</sup>
        <span>=</span>
        <span>{answer}</span>
      </h3>
    </div>
  );
};

export default NewFormula;
