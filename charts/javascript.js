var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#3cba9f",
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "#a83299",
                backgroundColor:"rgb(168, 50, 153,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "#f50511",
                backgroundColor:"rgb(245, 5, 17,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "#fa7575",
                backgroundColor:"rgb(250, 117, 117,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 62.6, y: 3366},
                ],
                label: "Pakistan",
                borderColor: "#0a0a04",
                backgroundColor:"rgb(10, 10, 4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 65.8, y: 1632},
                ],
                label: "Bangladesh",
                borderColor: "#28e307",
                backgroundColor:"rgb(40, 227, 7,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 81.1, y: 32193},
                ],
                label: "Japan",
                borderColor: "#825d49",
                backgroundColor:"rgb(130, 93, 73,0.1)",
                borderWidth:2,
                
              }
            ]
          },
          options: {
            plugins: {
              title: {
                  display: true,
                  text: 'Health and Wealth Indicators: Life expectancy and GDP of top 10 most populous countries',
                  font: {
                      size: 18
                  }
              },
              subtitle: {
                  display: true,
                  text: 'Countries with lower GDP per Capita also recorded lower life expectancy.',
                  font: {
                    size: 16
                  }
              }
          },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP per Capita '
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life Expectancy'
                  }
              }
            }
          }
        });
