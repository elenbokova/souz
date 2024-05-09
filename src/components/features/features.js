import React, { memo } from "react"

import "./features.scss"

const Features = memo(({ features }) => {
  return (
    <div className="features">
      <h2 className="title-2">Задачи которые мы решаем</h2>
      <ol>
        {features.map((feature, i) => (
          <li key={i}>
            <span>
              {feature.title}
            </span>
            <p>
              {feature.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  )
});

export default Features