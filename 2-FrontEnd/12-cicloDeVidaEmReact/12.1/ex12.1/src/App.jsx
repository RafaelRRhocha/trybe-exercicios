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
      <div className="flex flex-col justify-center">
        {
          loading ? (<p>Loading...</p>) :
          <img src={ dog } alt="imagem de um dog" width="200px" ></img>
        }
        <button type="button" onClick={ this.randomDogImages } class="inline-flex justify-center py-2 w-[100px] px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">next Dog</button>
      </div>
    )
  }
}