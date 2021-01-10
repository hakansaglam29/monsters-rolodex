import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CardList from './components/card-list/card-list';
import Search from './components/search/search';

function App(props) {
  const [monster, setMonster] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios('https://jsonplaceholder.typicode.com/users');
      setMonster(res.data)
    };
    fetchData();
  }, []);

  const filteredMonsters = monster.filter(b =>
    b.name.toLowerCase().includes(search.toLowerCase()))

  const handleChange = e => setSearch(e.target.value)
  

  return (
    <div className="App">
      <Search
        handleChange={handleChange}
        placeholder='type name...'
      />
      <CardList
        monster={filteredMonsters}
      />

    </div>
  );
}

export default App;
