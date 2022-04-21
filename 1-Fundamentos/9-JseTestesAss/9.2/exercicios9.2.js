const url = `https://api.coincap.io/v2/assets`;

const coinsFunc = () => {
  fetch(url)
  .then(response => response.json())
  .then(array => {

    array.data.forEach(coin => {
      const li = document.createElement('li')
      li.innerText = `${coin.name} (${coin.symbol}): ${Number(coin.priceUsd).toFixed(2)}`

      const ul = document.querySelector('#coinsContainer');
      ul.appendChild(li)
    })
  })
}
coinsFunc();