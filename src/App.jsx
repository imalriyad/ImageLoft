import { useState } from 'react'
import './App.css'
import { createClient } from 'pexels';

function App() {
  const [query,setQuery] = useState('')

 const handleSearch = ()=>{
  const client = createClient('l7KklyjZCSLGpHDWNJEZzKiItkZ6mir7l3ZvyxJUzDT76yRGfgCabJAM');
  client.photos.search({ query, per_page: 10 }).then(photos => {
    console.log(photos);
  });

 }
  return (
    <>
    <div className='flex items-center gap-4'>
    <input onChange={(e)=>setQuery(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
    <button onClick={handleSearch} className="btn btn-primary">Primary</button>
    </div>
      
    </>
  )
}

export default App
