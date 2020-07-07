import React, {useState, useEffect} from 'react';
import logo from './assets/theoffice.png'

//import erin from './assets/erin.jpg';
//import andy
//import dwight from './assets/dwight.jpg';
//import meredith from './assets/meredith.jpg';

import PersonCard from './components/PersonCard/PersonCard'

import './App.css'

function App() {
  const [search, setSearch] = useState(1);
  const [results, setResults] = useState({});

  useEffect(() => {
    async function fetchData(){
      try{
        const response = await fetch(`https://the-office.p.rapidapi.com/${search}`, {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "the-office.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_ACCESS_KEY
          }
        })
        const data = await response.json();
        setResults(data)
        console.log(data)
      } catch(err){
        console.log('No boy you thought it was gonna work didn\'t you')
      }
    }
    fetchData()
  }, [search])

  return (
    <div>
      <div className="image">
        <img className="logo" src={logo} alt="The Office Logo" />
      </div>
      <div className="selection">
        <select onChange={e => setSearch(e.target.value)}>
          <option value="1">Michael Scott</option>
          <option value="2">Jim Halpert</option>
          <option value="3">Dwight K. Schurte</option>
          <option value="4">Toby Flenderson</option>
          <option value="5">Pam Beesly</option>
          <option value="6">Ryan Howard</option>
          <option value="7">Andy Bernard</option>
          <option value="9">Angela Martin</option>
          <option value="10">Stanley Hudson</option>
          <option value="11">Kevin Malone</option>
          <option value="12">Creed Bratton</option>
          <option value="13">Meredith Palmer</option>
          <option value="14">Kelly Kapoor</option>
          <option value="15">Erin Hannon</option>
          <option value="16">Oscar Martinez</option>
          <option value="17">Darryl Philbin</option>
          <option value="18">Phyllis Lapin</option>
        </select>
      </div>
      <PersonCard png={require(`./assets/${search}.png`)} 
        name={results.name} realName={results.realname} 
        seasons={results.seasons}
      />
    </div>
  );
}

export default App;
