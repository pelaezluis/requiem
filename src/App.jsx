import { useEffect, useState } from 'react';
import './App.css';
import { Home } from './pages/Home';

function App() {

  const [blogs, setBlogs] = useState([])
  const url = 'http://localhost:5000/blogs'

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
  const getBlogs = () => {
    fetch(url, headers)
    .then(res => res.json())
    .then(res => setBlogs(res))
  }
  
  useEffect(getBlogs, []) 

  return (
    <div className="App">
      <Home blogs={blogs}/>
    </div>
  );
}

export default App;
