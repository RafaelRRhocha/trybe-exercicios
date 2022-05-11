import { Component } from "react";
import { Input } from "./Input";

export class Forms extends Component {

  state = {
    lugarFavorito: '',
    idade: 0,
    comment: '',
    check: false,
  }

  handleState = ({ target: { name, value }}) => {
    this.setState({
      [name]: value
    })
  }

  render(){
    return (
      <div>
        <form className="forms">
        <fieldset>
            <select>
              <option>0</option>
              <option>1</option>
            </select>
          <Input check={this.state.check} idade={this.state.idade} lugarFavorito={this.state.lugarFavorito} handleState={this.handleState}/>
          </fieldset>
          <textarea name="comment" value={this.state.comment} onChange={this.handleState}>

          </textarea>
        </form>
      </div>
    )
  }
}