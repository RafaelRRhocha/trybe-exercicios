import { Component } from 'react';
import { InputEstadosCheck } from '../components/InputEstadosCheck';

export class InputForms extends Component {
  render() {
    return (
      <fieldset className='forms'>
        <label>
          Nome:
          <input type='text' name='nome' maxLength='40' required />
        </label>

        <label>
          Email:
          <input type='email' name='email' maxLength='50' required />
        </label>

        <label>
          Cpf:
          <input type='number' name='cpf' maxLength='11' required />
        </label>

        <label>
          Endereço:
          <input
            type='text'
            name='endereco'
            onChange={() => replace(/[^\w\s]/gi, '')}
            maxLength='40'
            required
          />
        </label>

        <label>
          Cidade:
          <input
            type='text'
            name='cidade'
            maxLength='28'
            onBlur={true}
            required
          />
        </label>

        <label>
          Estados:
          <InputEstadosCheck />
        </label>

        <label className='radio'>
          <input type='radio' name='casa' id='' /> Casa
          <input type='radio' name='apartamento' id='' /> Apartamento
        </label>
      </fieldset>
    );
  }
}
