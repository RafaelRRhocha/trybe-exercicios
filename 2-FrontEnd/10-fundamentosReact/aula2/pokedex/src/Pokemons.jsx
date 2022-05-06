import { Component } from 'react'

export class Pokemon extends Component {
  render(){
    const { name, type, averageWeight: peso, image } = this.props.pokemon;
    return(
      <section className="Pokemon">
        <div>

        <h2>{name}</h2>
        <h3>{type}</h3>
        <h3>{peso.value} {peso.measurementUnit}</h3>

        </div>

        <img className="img__pokemon" src={image} alt="Imagem de um pokémon" />

      </section> 
    )
  }
}
