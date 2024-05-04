
import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios'

function App() {

const [name,setName] = useState("Default Name");
const [age,setAge] = useState("0");
 


  useEffect(()=>{
   axios.get('http://localhost:3000/home')
   .then((response)=>{
      setName(response.data.name);
      setAge(response.data.age);
   })
  },[])

  return (
    <div className="App">
      <h1>
        Name : {name} 
        Age : {age}
      </h1>
    </div>
  );
}

export default App;
