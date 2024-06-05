import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axiosPrivate from './api/axios';
import axios from 'axios';
window.Buffer = window.Buffer || require("buffer").Buffer; 
function App() {
  useEffect(() => {
    axios.get('rest/api/2/search?jql=project=KAN', {
      headers:{
          'Authorization': `Basic c2Fhc2h1dG9zaDM5QGdtYWlsLmNvbTpBVEFUVDN4RmZHRjB2ZklMWmcxdU1PeEYySFhVTExIYTZyaTlGSkxjT0FxREt0U21ia01keGdkVXM1dzZRX2FEajJ1cC1PTm9IZTh4SmZCZWk3UzJjNlg1N1gxUEotblNyR1J0SmVuWDhzS1ZtbzRNUlAzcHgtMFRRdmpWNjFqaGt2UFdZcDZ2NmlkNWczVUlwSkRPMnFvLVd4WlB0QnQ1eFc0RW95bmFBeHpqcXF0aU84R3JZYW89RDc4Mjc5NkU=`,
          'Accept': 'application/json'
      }
    })
  }, []) 
  return (
    <div className="App">
      <header className="App-header">
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
