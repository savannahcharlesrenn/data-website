Papa.parse('fashionbrand.csv', {
  download: true,
  header: true,
  skipEmptyLines: true,
  complete: function(results) {
    console.log("running");
    console.log(results.data);
    const tbody = document.querySelector('#dataTable tbody');
 
    results.data.forEach(row => {
 
      const tr = document.createElement('tr');
 
      tr.innerHTML = `
        <td>BrandName</td>
        <td>Brand Country Origin</td>
        <td>Brand Sector</td>
        <td>Rank 2016</td>
        <td>Rank 2017</td>
        <td>Rank 2018</td>
        <td>Rank 2019</td>
        <td>Rank 2020</td>
        <td>Equity 2016</td>
        <td>Equity 2017</td>
        <td>Equity 2018</td>
        <td>Equity 2019</td>
        <td>Equity 2020</td>
        <td>Growth Rate 2016</td>
        <td>Growth Rate 2017</td>
        <td>Growth Rate 2018</td>
        <td>Growth Rate 2019</td>
        <td>Growth Rate 2020</td>
      `;
 
      tbody.appendChild(tr); 
    });
  },
 
  error: function(err) {
    console.error("FAILED");
    console.error(err);
  }
});

Papa.parse('fashionbrand.csv', {
  download: true,
  header: true,
  skipEmptyLines: true,
 
  complete: function(results) {
 
    const labels = [];
    const values = [];
 
    results.data.forEach(row => {
      labels.push(row.Platform);
      values.push(cleanNumber(row.StreamsForUSMonthlyMinimumWage));
    });
 
    new Chart(
      document.getElementById('revenueChart'),
      {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Streams for US Monthly Minimum Wage',
            data: values,
            backgroundColor: '#4e79a7'
          }]
        },
        options: {
          scales: {
            y: {
              type: 'linear',
              title: {
                display: true,
                text: 'Global Fashion Brand Ranking'
              }
            }
          }
        }
      }
    );
  }
});
function cleanNumber(value) {
  return Number(
    String(value).replace(/[^0-9.-]/g, '')
  );
}
