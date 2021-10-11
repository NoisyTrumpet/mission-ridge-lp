import React from "react"
import { data } from "./Data/data"
import Card from "./Fragments/Card"
import "./rangePricing.scss"

const RangePricing = () => {
  return (
    <div className="card-deck">
      <div className="title">
        <h4>Range Pricing</h4>
      </div>
      <div className="card-grid">
        {data &&
          data.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              icon={item.icon}
              details={item.details}
              subDetails={item.subDetails}
              discount={item.discount}
            />
          ))}
      </div>
    </div>
  )
}

export default RangePricing
