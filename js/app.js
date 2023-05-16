(async function() {
  const tbody = document.querySelector('#app > table tbody');
  const res = await (await fetch('request-source-list.json')).json();
  let str = '';

  res.forEach((item) => {
    let row = `<tr><td>${item['DisplayName']}</td><td>${item['Value']}</td></tr>`;
    str += row;
  });

  tbody.innerHTML = str;
})();
