import logo from './logo.svg';
import './App.css';
import { FunctionalClock } from './components/Ejercicio6Functional';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FunctionalClock name="Renzo David"></FunctionalClock>
      </header>
    </div>
  );
}

export default App;
