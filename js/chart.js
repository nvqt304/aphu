const ctx = document.getElementById('multipleLineChart').getContext('2d');

const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["12:30","13:00","13:30","14:00","14:30","15:00"
    ],
    datasets: [{
        label: 'Pressure',
        data: [1,3,3,2,5,2],
        borderWidth: 1,
        fill: false,
        borderColor: 'red',
        borderWidth: 2
      },
      {
        label: 'Temperature',
        data: [114.9,113,114.5,114.7,114,113.9],
        borderWidth: 1,
        fill: false,
        borderColor: 'green',
        borderWidth: 2
      },
      {
        label: 'Flow',
        data: [10709, 10609,10680,11709,10000,12000],
        borderWidth: 1,
        fill: false,
        borderColor: 'orange',
        borderWidth: 2
      },
      {
        label: 'FlowG1000',
        data: [4325, 546,342,43246,4563,2142],
        borderWidth: 1,
        fill: false,
        borderColor: 'black',
        borderWidth: 2
      },
      {
        label: 'TS',
        data: [231, 213,656,212,323,464],
        borderWidth: 1,
        fill: false,
        borderColor: 'pink',
        borderWidth: 2
      }
    ]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});