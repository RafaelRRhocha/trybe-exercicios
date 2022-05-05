const Task = (value) => <li><h1>{value}</h1></li>

const tasks = [
  'Estudar React',
  'Estudar Tailwind',
  'Estudar JS',
];

const App = () => <ul>{ tasks.map(Task) }</ul>
  
export default App; 