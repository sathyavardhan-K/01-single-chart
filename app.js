// Some DataSets are massive and will bring any web browser to its knees if you
// try to load the entire thing. To keep your app performing optimally, take
// advantage of filtering, aggregations, and group by's to bring down just the
// data your app needs. Do not include all columns in your data mapping file,
// just the ones you need.
//
// For additional documentation on how you can query your data, please refer to
// https://developer.domo.com/docs/dev-studio/dev-studio-data

    
my_test_data = document.getElementById('first');

domo.get('/data/v2/olist_1?fields=customer_city,price&groupby=customer_city')
    .then(function(olist_1){
      //console.log(olist_chart[0]['customer_state']);

      olist_1 = olist_1.sort((a,b) => b.price - a.price);
      console.log(olist_1[0].customer_city, olist_1[0].price);
      
      //my_test_data.innerHTML = olist_chart[0]['customer_state'];
  
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [olist_1[0].customer_city, olist_1[1].customer_city, olist_1[2].customer_city, olist_1[3].customer_city, 
            olist_1[4].customer_city, olist_1[5].customer_city, olist_1[6].customer_city, olist_1[7].customer_city, olist_1[8].customer_city,
            olist_1[9].customer_city,olist_1[10].customer_city], //x-axis
            datasets: [{
                label: '# of Votes',
                data: [olist_1[0].order_status,olist_1[1].price,olist_1[2].price,olist_1[3].price,olist_1[4].price,
                olist_1[5].price,olist_1[6].price,olist_1[7].price,olist_1[8].price,olist_1[9].price,olist_1[10].price], //y-axis
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(245, 255, 12, 0.2)',
                    'rgba(207, 76, 228, 0.2)',
                    'rgba(228, 76, 167, 0.2)',
                    'rgba(68, 149, 61, 0.2)',
                    'rgba(162, 174, 165, 0.2)',
                    'rgba(162, 174, 255, 0.2)'

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(245, 255, 12, 1)',
                    'rgba(207, 76, 228, 1)',
                    'rgba(228, 76, 167, 1)',
                    'rgba(68, 149, 61, 1)',
                    'rgba(162, 174, 165, 1)',
                    'rgba(162, 174, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
  
  }
);