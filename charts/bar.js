var ctx = document.getElementById('myBarChart').getContext('2d');
      var myBarChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
            datasets: [{
                label: '# of Apples',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    '#ff0800'
                ]
            },
            {
                label: '# of Oranges',
                data: [22, 10, 23, 6, 22, 13],
                backgroundColor: [
                    '#FFA500'
                ],
            }
        ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Apples and Oranges by year',
                    font: {
                        size: 18
                    }
                },
                subtitle: {
                    display: true,
                    text: 'For all but one year, oranges outnumbered apples'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of fruits',
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
