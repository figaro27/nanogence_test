import React from "react";
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
          ['', 'W/O Catalyst', 'W/ Catalyst techonloy'],
          ['Total cost reduction per year (in USD)', 1, 3],
          ['Total carbon reduction (in MT)', 3, 4],
          ['Overall cost reduction (in USD)', 5, 7],
        ]}
        options={charOptions}
      />
    </div>
  )
}
export default Output