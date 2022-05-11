import { Component } from "react";

export class DadosEmprego extends Component {
  render() {
    return (
      <fieldset className="forms">
        <label>
          Resumo do Curriculo:
          <textarea maxLength={1000} required>

          </textarea>
        </label>

        <label>
          Cargo:
          <textarea maxLength={40} onMouseEnter={() => alert('Preencha com cuidado esta informação.')} required>

          </textarea>
        </label>

        <label>
          Descrição do cargo:
          <textarea maxLength={500} required>

          </textarea>
        </label>
      </fieldset>
    )
  }
}
