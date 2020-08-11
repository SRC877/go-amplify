import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {API} from 'aws-amplify';

function App() {
  const {greeting,setGreeting} = useState('loading');
  useEffect(()=>{
    fetchGreeting()
  },[])
  async function fetchGreeting(){
    const greetingData = await API.get('myapi','/greeting')
    console.log({greetingData})
    setGreeting(greetingData.message)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>{greeting}</h2>
      </header>
    </div>
  );
}

export default App;
