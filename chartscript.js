Papa.parse('fashionbrand.csv', {
  download: true,
  header: true,
  skipEmptyLines: true,

  complete: function(results) {

    const labels = [];
    const values = [];

    results.data.forEach(row => {

      if (row.BrandName && row.Equity2020) {
        labels.push(row.BrandName);
        values.push(Number(row.Equity2020));
      }

    });

    new Chart(
      document.getElementById('revenueChart'),
      {
        type: 'bar',

        data: {
          labels: labels,
          datasets: [{
            label: 'Brand Equity 2020',
            data: values,
            backgroundColor: '#b89b79'
          }]
        },

        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Brand Equity'
              }
            }
          }
        }
      }
    );
  },

  error: function(err) {
    console.error("Chart data failed to load:", err);
  }
});
