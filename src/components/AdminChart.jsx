import React from 'react'
import { useState } from 'react';
import Chart from 'react-apexcharts';
const AdminChart = () => {
        const [state, setState] = useState({
            series: [{
              name: 'visitor',
              data: [31, 40, 28, 51, 42, 109, 100]
            }, {
              name: 'rengers',
              data: [11, 32, 45, 32, 34, 52, 41]
            }],
            options: {
              chart: {
                id: 'responsive-chart',
                height: 350,
                type: 'area'
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'smooth'
              },
              xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
              },
              tooltip: {
                x: {
                  format: 'dd/MM/yy HH:mm'
                },
              },
            },
        });
  return (
    <div className='w-100'>
        <h3>Total Chart </h3>
        <div id="chart">
            <Chart options={state.options} series={state.series} type="area" width="100%" height={350} />
        </div>
        <div id="html-dist"></div>
    </div>
  )
}

export default AdminChart

