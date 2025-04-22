var ctx = document.getElementById('columnChart').getContext('2d');
      var myBarChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
            datasets: [{
                label: 'Larceny-Theft',
                data: [362, 405, 347, 366, 294, 291, 169, 243, 152, 147, 202],
                backgroundColor: [
                    '#eb6734'
                ]
            }
        ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Larceny-Theft between 2012 and 2022',
                    font: {
                        size: 18
                    }
                },
                subtitle: {
                    display: true,
                    text: 'X cases of Larceny-Theft occurred between 2012 and 2022.'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Cases of Larceny-Theft',
                        font: {
                            size: 14
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Year',
                        font: {
                            size: 14
                        }
                    }
                }
                
                
            },
        },
    });
