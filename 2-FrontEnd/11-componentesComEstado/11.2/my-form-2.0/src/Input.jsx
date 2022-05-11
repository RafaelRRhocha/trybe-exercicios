import { Component } from 'react';

export class Input extends Component {
  render() {
    const { check, idade, lugarFavorito, handleState } = this.props
    return (
      <>
        <input
          type='text'
          name='lugarFavorito'
          value={lugarFavorito}
          onChange={handleState}
        />

        <label>
          <input
            type='number'
            name='idade'
            value={idade}
            onChange={handleState}
          />
        </label>

        <input type='file' />
        <input
          type='checkbox'
          name='check'
          value={check}
          onChange={handleState}
        />
      </>
    );
  }
}
