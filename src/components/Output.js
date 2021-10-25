import React, { useState } from "react";
import Chart from "react-google-charts";

const Output = (props) => {
  const charOptions = {
    colors: ['#4169E1', '#3CB371'],
    legend: 'top',
  }
  const total_cost = props.data.total_cost
  const total_cost_cat = props.data.total_cost_cat
  const total_carbon = props.data.total_carbon
  const total_carbon_cat = props.data.total_carbon_cat
  const overall_cost = props.data.overall_cost
  const overall_cost_cat = props.data.overall_cost_cat
  return (
    <div className="">
      <Chart
        width={'100%'}
        height={'32rem'}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['', 'Costs without catalysts', 'Costs with catalysts'],
          ['Total cost reduction per year (in USD)', total_cost, total_cost_cat],
          ['Total carbon reduction (in MT)', total_carbon, total_carbon_cat],
          ['Overall cost reduction (in USD)', overall_cost, overall_cost_cat],
        ]}
        options={charOptions}
      />
    </div>
  )
}
export default Output