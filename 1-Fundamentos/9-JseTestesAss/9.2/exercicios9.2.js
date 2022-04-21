const url = `https://api.coincap.io/v2/assets`;

const coinsFunc = () => {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const coinsFinal = data.forEach(coins => {
      `${coins.name}: ${coins.priceUsd}`
    });

    const coins = document.querySelector('#coinsContainer')
    coins.innerHTML = coinsFinal;

    
  })
}
coinsFunc();