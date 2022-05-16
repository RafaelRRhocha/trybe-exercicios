import './App.css';
import React from 'react';

export default class App extends React.Component {
  state = {
    dog: '',
    loading: true,
  }

  componentDidMount() {
  this.randomDogImages()
  }

  randomDogImages = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          dog: data.message,
          loading: false,
        })
    })
  }

  render() {
    const { dog, loading} = this.state
    return (
      <>
        {
          loading ? (<p>Loading...</p>) :
          <img src={ dog } alt="imagem de um dog" width="200px" ></img>
        }
        <button type="button" onClick={ this.randomDogImages }>ProxDog</button>
      </>
    )
  }
}