var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: [
              'Aggravated Assault',
              'Robbery',
              'Burglary',
              'Motor Vehicle Theft',
              'Rape'
            ],
            datasets: [{
              label: '2021',
              data: [2, 0, 17, 4, 1],
              fill: true,
              backgroundColor: 'rgba(255, 127, 14, 0.2)',
              borderColor: 'rgb(255, 127, 14)',
              pointBackgroundColor: 'rgb(255, 127, 14)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(255, 127, 14)'
            },
            {
              label: '2022',
              data: [3, 1, 11, 6, 5],
              fill: true,
              backgroundColor: 'rgba(214, 39, 40, 0.2)',
              borderColor: 'rgb(214, 39, 40)',
              pointBackgroundColor: 'rgb(214, 39, 40)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(214, 39, 40)'
            }]
          },
          options: {
            responsive: true,
            plugins: {
            title: {
              display: true,
              text: 'College Park crime trends in 2021 and 2022',
              font: {
                size: 18
              }
            },
          subtitle: {
              display: true,
              text: 'Although crime increased in College Park in 2022, burglary went down to 11 from 17.',
              font: {
                size: 16
              }
          },
            elements: {
              line: {
                borderWidth: 3
              }
            }
          }
        }
        });