import './App.css'
import { Component } from 'react'

export class Pokemon extends Component {
  render(){
    const { pokemon: { name, type, averageWeight: peso, image } } = this.props.pokemon;
    return(
      <section className="flex py-3 justify-center hover:animate-spin bg-zinc-900 text-zinc-100">
       <div className="flex py-5 items-center">
         <div>
          <h2 className="p-1">{name}</h2>
          <h3 className="p-1">{type}</h3>
          <h3 className="p-1">{peso.value} {peso.measurementUnit}</h3>
        </div>

        <img className="" src={image} alt={name} />
      </div>
      </section>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};
