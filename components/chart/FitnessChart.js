import { useRef, useEffect } from 'react';

import Chart from 'chart.js/auto';

const colors = {
  purple: {
    default: 'rgb(0, 160, 0, 1)',
    half: 'rgb(0, 160, 0, 0.5)',
    quarter: 'rgb(0, 160, 0, 0.25)',
    zero: 'rgb(0, 160, 0, 0)',
  },
  indigo: {
    default: 'rgb(8, 0, 255, 1)',
    half: 'rgb(8, 0, 255, 0.5)',
    quarter: 'rgb(8, 0, 255, 0.25)',
    zero: 'rgb(8, 0, 255, 0)',
  },
};

const FitnessChart = ({ DABCValues, ABCValues }) => {
  const canvasEl = useRef(null);

  useEffect(() => {
    const ctx = canvasEl.current.getContext('2d');

    const DABCgradient = ctx.createLinearGradient(0, 16, 0, 600);
    DABCgradient.addColorStop(0, colors['purple'].half);
    DABCgradient.addColorStop(0.65, colors['purple'].quarter);
    DABCgradient.addColorStop(1, colors['purple'].zero);

    const ABCgradient = ctx.createLinearGradient(0, 16, 0, 600);
    ABCgradient.addColorStop(0, colors['indigo'].half);
    ABCgradient.addColorStop(0.65, colors['indigo'].quarter);
    ABCgradient.addColorStop(1, colors['indigo'].zero);

    const DABC_weight = DABCValues;
    const ABC_weight = ABCValues;

    const labels = [];
    for (let i = 1; i <= DABC_weight.length; i++) {
      labels.push(i);
    }

    const data = {
      labels: labels,
      datasets: [
        {
          backgroundColor: DABCgradient,
          label: 'DABC-HS',
          data: DABC_weight,
          fill: true,
          borderWidth: 3,
          borderColor: colors['purple'].default,
          lineTension: 0.2,
          pointBackgroundColor: colors['purple'].default,
          pointRadius: 3,
          pointStyle: 'circle',
        },
        {
          backgroundColor: ABCgradient,
          label: 'ABC',
          data: ABC_weight,
          fill: true,
          borderWidth: 2,
          borderColor: colors['indigo'].default,
          lineTension: 0.2,
          pointBackgroundColor: colors['indigo'].default,
          pointRadius: 3.5,
          pointStyle: 'rectRot',
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
