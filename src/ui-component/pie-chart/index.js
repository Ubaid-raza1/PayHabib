import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
  const series = [44, 55, 41];
  const options = {
    chart: {
      width: 380,
      type: 'donut'
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270
      }
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      type: 'gradient'
    },
    legend: {
      formatter: function (val, opts) {
        return val + ' - ' + opts.w.globals.series[opts.seriesIndex];
      }
    },
    title: {
      text: 'Payment Status'
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ],
    labels: ['Completed', 'Pending', 'Rejected']
  };

  return <ReactApexChart options={options} series={series} type="donut" height={350} />;
};

export default PieChart;
