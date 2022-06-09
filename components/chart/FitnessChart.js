import { useRef, useEffect, useContext } from 'react';

import Chart from 'chart.js/auto';

const colors = {
  purple: {
    default: 'rgba(149, 76, 233, 1)',
    half: 'rgba(149, 76, 233, 0.5)',
    quarter: 'rgba(149, 76, 233, 0.25)',
    zero: 'rgba(149, 76, 233, 0)',
  },
  indigo: {
    default: 'rgba(80, 102, 120, 1)',
    half: 'rgba(80, 102, 120, 0.5)',
    quarter: 'rgba(80, 102, 120, 0.25)',
    zero: 'rgba(80, 102, 120, 0)',
  },
};

const FitnessChart = ({ chartValues, title, color }) => {
  const canvasEl = useRef(null);

  useEffect(() => {
    const ctx = canvasEl.current.getContext('2d');

    const gradient = ctx.createLinearGradient(0, 16, 0, 600);
    gradient.addColorStop(0, colors[color].half);
    gradient.addColorStop(0.65, colors[color].quarter);
    gradient.addColorStop(1, colors[color].zero);

    const weight = chartValues;

    const labels = [];
    for (let i = 1; i <= chartValues.length; i++) {
      labels.push(i);
    }

    const data = {
      labels: labels,
      datasets: [
        {
          backgroundColor: gradient,
          label: title,
          data: weight,
          fill: true,
          borderWidth: 2,
          borderColor: colors[color].default,
          lineTension: 0.2,
          pointBackgroundColor: colors[color].default,
          pointRadius: 3,
        },
      ],
    };
    const config = {
      type: 'line',
      data: data,
    };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  }, []);

  return (
    <>
      <span>Fitness Value Chart</span>
      <canvas id='myChart' ref={canvasEl} height='100' />
    </>
  );
};

export default FitnessChart;
