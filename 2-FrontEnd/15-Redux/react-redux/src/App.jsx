import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { actCreatorNewTweet } from './store/actions/user';

function App() {
  const dispatch = useDispatch();

  dispatch(actCreatorNewTweet({ name: 'rafael', message: 'primeiro'}));
  return (
    <div>
      <h1>Hello, World</h1>
    </div>
  );
};

export default App
