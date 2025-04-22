var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: 'Burglary cases',
            data: [46, 51, 69, 48, 27, 20, 11, 29, 17, 17, 11],
            borderColor: 'rgba(255, 8, 0)',
            backgroundColor: 'rgba(255, 8, 0, 0.1)',
            tension: 0.1},
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Burglary cases in College Park between 2012 and 2022',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Between 2012 and 2022, College Park recorded the highest cases of Burglary in 2014.',
                font: {
                    size: 16
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
});