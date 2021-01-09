import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CardList from './components/card-list/card-list'

function App(props) {
  const [monster, setMonster] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios('https://jsonplaceholder.typicode.com/users');
      setMonster(res.data)
      console.log(res.data)
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <input type='search' placeholder='type name...' onChange={e => setSearch(e.target.value)}/>
      <CardList monster={monster}/>
    </div>
  );
}

export default App;
