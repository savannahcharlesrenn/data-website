Papa.parse('fashionbrand.csv', {
  download: true,
  header: true,
  skipEmptyLines: true,

  complete: function(results) {
    console.log("running");
    console.log(results.data);

    const tbody = document.querySelector('#dataTable tbody');

    results.data.forEach(row => {

      // Skip rows without a brand name
      if (!row.BrandName) return;

      const tr = document.createElement('tr');

      tr.innerHTML = `
        <td>${row.BrandName}</td>
        <td>${row.BrandOriginCountry}</td>
        <td>${row.BrandSubSector}</td>
        <td>${row.Rank2016}</td>
        <td>${row.Rank2017}</td>
        <td>${row.Rank2018}</td>
        <td>${row.Rank2019}</td>
        <td>${row.Rank2020}</td>
        <td>${row.Equity2016}</td>
        <td>${row.Equity2017}</td>
        <td>${row.Equity2018}</td>
        <td>${row.Equity2019}</td>
        <td>${row.Equity2020}</td>
        <td>${row.GrowthRate2016}</td>
        <td>${row.GrowthRate2017}</td>
        <td>${row.GrowthRate2018}</td>
        <td>${row.GrowthRate2019}</td>
        <td>${row.GrowthRate2020}</td>
      `;

      tbody.appendChild(tr);
    });
  },

  error: function(err) {
    console.error("FAILED");
    console.error(err);
  }
});
