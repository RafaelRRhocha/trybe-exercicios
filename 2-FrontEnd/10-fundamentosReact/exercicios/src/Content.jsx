import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composição de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composição de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
]

export class Content extends React.Component {
  render() {
    return(
      <>
        {conteudos.map((item) => (
          <div key={item.conteudo}>
            <h2>{`O conteudo é: ${item.conteudo}`}</h2>
            <p>{`status: ${item.status}`}</p>
            <p>{`bloco: ${item.bloco}`}</p>
          </div>
        ))}
      </>
    );
}
}
