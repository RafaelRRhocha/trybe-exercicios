import { Component } from "react";

export class Button extends Component {
  render() {
    return (
      <div className="btns">
        <button className="btn" type="submit">Enviar</button>
        <button className="btn" type="reset">Limpar</button>
      </div>
    )
  }
}
