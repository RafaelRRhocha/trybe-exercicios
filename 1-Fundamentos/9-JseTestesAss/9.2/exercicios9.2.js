const url = `https://api.coincap.io/v2/assets`;

const coinsFunc = () => {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const arr = [];
    arr.push(data);
    
    arr.forEach(coin => {
      const li = document.createElement('li')
      li.innerText = `${coin.name} ${coin.symbol} ${coin.priceUsd}`

      const ul = document.querySelector('#coinsContainer');
      ul.appendChild(li)
    })
  })
}
coinsFunc();