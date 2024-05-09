import React, { memo } from "react"

import ServiceItem from "../service-item/service-item"
import "./services.scss"

const Services = memo(({ services }) => {
  return (
    <div className="services">
      <h2 className="title-2">Услуги и Цены</h2>
      <ul className="services__list">
        {services.map((service, i) => (
          <ServiceItem
            key={i}
            img={service.img}
            title={service.title}
            description={service.description}
          />
        ))}
      </ul>
    </div>
  )
});

export default Services