import { useEffect, useState } from 'react';
import './BD.css';
import Card from './Card.js';
import axios from 'axios';
import Main from './BD.js';

function App() {
  
  useEffect(() => {getCats()}, [])
  const [cats, setCats] = useState([])
  const [searchValue, setSearchValue] = useState('')

   const getCats = async () => {
    await axios.get(`https://api.thecatapi.com/v1/breeds`)
    .then( async cat => { 
      setCats(cat.data)
    })
  }
  console.log(cats)

  const filteredCats = cats.filter(cat => cat.name.toLowerCase().startsWith(searchValue))

  return (
    <div className="App">
    <input placeholder='search...' onChange={event => setSearchValue(event.target.value)} className='input-container'/>
      <div className='gridCat'>{filteredCats.map((cat) => <Card cat={cat} key={cat.id}/>)}</div>
      
    </div>
  );

}

export  {App};