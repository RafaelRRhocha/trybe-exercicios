const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        typeM: 'marguerita',
        amount: 1,
        price: 25,
      },
      pepperoni: {
        typeP: 'pepperoni',
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const customerInfo = ({
  name,
  phoneNumber,
  address: {street, number, apartment},
  order: {
    delivery: {deliveryPerson},
  }
}) => {
  return `Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, ${street}, ${number}, ${apartment}`
}
console.log(customerInfo(order));

const orderModifier = ({
  order: {
    pizza: { 
      marguerita: { typeM },
      pepperoni: {typeP} },
    drinks: {coke: {type}}
  }
}) => {
  let total = '50,00'
  let name = 'Luiz Silva';
  return `Olá ${name}, o total do seu pedido de ${typeM}, ${typeP} e ${type} é ${total}.`
}
console.log(orderModifier(order));