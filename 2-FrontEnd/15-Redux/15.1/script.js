const Redux = require('redux');

const initialAction = (index) => (
  {
    type: 'next-color',
    index,
  }
)

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'next-color': {
      return {
        ...state,
        index: action.index +=1,
      }
    };

    case 'previous-color': {
      return {
        ...state,
        index: action.index -=1,
      }
    };
    default: return state;
  }
}

document.querySelector('#previous').addEventListener('click', () => {
  console.log('sasdasdas');
});

document.querySelector('#next').addEventListener('click', () => {
  
});

const store = Redux.createStore(reducer);

store.dispatch(initialAction());

const finalState = store.getState();

console.log(finalState);