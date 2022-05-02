import './App.css';

const compromissos = ['estudar js', ' ', 'estudar react'];

compromissos.map((task) => `<li>${task}</li>`)

const Task = (value) => {
  return value
}

function App() {
  return (
    <div className="App">
      <p>{Task(compromissos)}</p>
    </div>
  );
}

export default App;
