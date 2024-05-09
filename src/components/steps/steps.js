import React, { memo } from "react"

import Phone from "../phone";
import "./steps.scss";

const Steps = memo(({ steps }) => {
  const renderStep = (step) => {

    const phoneRegex = /(\d{1}-\d{4}-\d{2}-\d{2}-\d{2})/;

    if (phoneRegex.test(step)) {
      const parts = step.split(phoneRegex);
      return (
        <p>
          {parts[0]}
          <Phone value={parts[1]} />
        </p>
      );
    } else {
      return step;
    }
  };

  return (
    <div className="steps">
      <h2 className="title-2">Как проходит работа</h2>
      <ol>
        {
          steps.map((step, i) => (
            <li key={i}>
              {renderStep(step)}
            </li>
          ))
        }
      </ol>
    </div>
  );
});

export default Steps;