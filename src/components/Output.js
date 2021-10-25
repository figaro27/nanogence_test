import React, { useState } from "react";
import Chart from "react-google-charts";

const Output = (props) => {
  const charOptions = {
    colors: ['#4169E1', '#3CB371'],
    legend: 'top',
  }
  return (
    <div className="">
      <Chart
        width={'100%'}
        height={'32rem'}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['', 'Costs without catalysts', 'Costs with catalysts'],
          ...props.data
        ]}
        options={charOptions}
      />
    </div>
  )
}
export default Output