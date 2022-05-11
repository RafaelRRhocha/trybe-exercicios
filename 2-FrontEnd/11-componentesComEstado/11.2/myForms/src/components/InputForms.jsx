import { Component } from "react";

export class InputForms extends Component {
  render() {
    return (
        <fieldset className="Forms">
          <label>
            Nome:
            <input type="text" name="nome" maxLength="40" required/>
          </label>

          <label>
            Email:
            <input type="email" name="email" maxLength="50" required/>
          </label>

          <label>
            Cpf:
            <input type="number" name="Cpf" maxLength="11" required/>
          </label>

          <label>
            Endereço:
            <input type="text" name="endereço" maxLength="40" required/>
          </label>

          <label>
            Cidade:
            <input type="text" name="cidade" maxLength="28" required/>
          </label>

        </fieldset>
    )
  }
}