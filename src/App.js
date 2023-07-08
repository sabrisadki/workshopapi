import React , {useState,useEffect} from 'react'
import axios from 'axios'
import './App.css';
import UserCard from './UserCard';

function App() {

const [user,setUser]=useState([])

useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/users')
.then(res=>{
  console.log(res.data,'res')
  setUser(res.data)
})
.catch(err=>{
  console.log(err)
})
},[])

  return (
    <div className="App" style={{display:'flex', flexWrap:'wrap'}}>
{ user.map((el)=>  (<UserCard  key={el.id}   kaskrout={el}   />   )  )}
    </div>
  );
}

export default App;

