// frontend/src/App.js
// import logo from './logo.svg';
// import './App.css';
import './tailwind.css'; // Import Tailwind CSS

import Menu from './components/Menu';
import AddMenuItemForm from './components/AddMenuItemForm'; // Import the AddMenuItemForm component

function App() {
  return (
    <div className="App">
{/*       <header className="App-header">
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
      </header> */}

      <AddMenuItemForm />

      <Menu />

    </div>
  );
}

export default App;
