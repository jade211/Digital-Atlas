import logo from './logo.svg';
import './App.css';
import Amenities from './components/amenities';
// import Transport from './components/transportation';
import Crime from './components/crime';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Transport /> */}
        <Amenities />
        <Crime />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
