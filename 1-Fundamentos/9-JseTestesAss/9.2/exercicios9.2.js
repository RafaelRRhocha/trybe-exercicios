const url = `https://api.coincap.io/v2/assets`;

const coinsFunc = () => {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const coinsFinal = data.reduce((acc, coin) => {
      acc += `${coin.name}: ${coin.priceUsd}`
      return acc;
    }, '')

    const coins = document.querySelector('[data-js="coinsContainers"]')
    coins.innerHTML = coinsFinal;

    
  })
}
coinsFunc();