//https://www.chartjs.org/docs/latest/samples/line/multi-axis.html

//TODO supports tooltip need to add

const labels = [
  1,
  2,
  3,
  4,
  5,
  6, 
  7
];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Temperature',
      data: [20, 21, 22, 24, 25, 26, 28],
      backgroundColor: 'red',
      borderColor: 'red',
      yAxisID: 'y'
    },
    {
      label: 'Pressure',
      data: [1, 1.5, 2, 2.5, 3, 4, 5],
      backgroundColor: 'blue',
      borderColor: 'blue',
      yAxisID: 'y1'
    },
    {
      label: 'Transit time',
      data: [16.5, 16.6, 16.5, 16.4, 16.5, 16.5, 16.5],
      backgroundColor: '#add8e6',
      borderColor: '#add8e6',
      yAxisID: 'y2'
    },
    {
      label: 'Heater Temperature',
      data: [20, 27, 30, 37, 45, 56, 67],
      backgroundColor: 'orange',
      borderColor: 'orange',
      yAxisID: 'y3'
    }
  ]
};


const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'UCA Board Example Plot'
      }
    },
     tooltip: {
        usePointStyle: true,
      },
    scales: {
      y: {
        ticks: { color: 'red'},
        type: 'linear',
        display: true,
        position: 'left',
        min: 0,
        max: 80
        // "#FFA500",
      },
      y1: {
        ticks: {color: 'blue'},
        type: 'linear',
        display: true,
        position: 'left',
        min: 0,
        max: 10,
        // grid line settings
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        }},
        y2: {
          ticks: {color: '#add8e6'},
          type: 'linear',
          display: true,
          position: 'left',
          min: 0,
          max: 35,
          grid: {
            drawOnChartArea: false,
          },
        
      },
        y3: {
        ticks: {color: 'orange'},
        type: 'linear',
        display: true,
        position: 'left',
        min: 0,
        max: 80,
        grid: {
          drawOnChartArea: false,
        }},
    }
  },
};

  var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
