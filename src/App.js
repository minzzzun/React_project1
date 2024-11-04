import logo from './logo.svg';
import './App.css';
import Comp1 from './Comp1';  
import Comp2 from './Comp2';
import Hello from './component/Hello.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          추가 글자 여기여기
          <Comp1/>
          <Comp2/>
          <Hello/>
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
