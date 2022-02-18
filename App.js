
import './App.css';
import plogo from "./Pokeapi.png"
import axios from "axios"
import {useEffect} from "react"
import {useState} from "react"

function App() {

  
  const[pokemon , setPokemon] = useState("");
  const [selectPok , setSelectPok] = useState(false)
  const[pokDetail , setPokDetail] = useState({

    name: "" , 
    img:"" , 
    abilities : "",
    abilities1 : ""

  })

  useEffect(()=>{

    Api();
  },[])
  
  const Api = () =>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(res =>{
      const result = res.data
      console.log(result)
      setPokDetail
      ({
        name: pokemon ,  
        img:res.data.sprites.front_default , 
        abilities : res.data.abilities[0].ability.name,
        abilities1 : res.data.abilities[1].ability.name
      });
      setSelectPok(true);
    })
  }

  return (
    <div className="App">
      <div className="section">
        <img src={plogo}></img>
      </div>
      <div className="section2">
      <input type={"text"} placeholder="enter pokemon name" onChange={(event) =>{setPokemon(event.target.value)}}></input>
      <button onClick={Api}>Submit</button>
       </div>
       <div className='section3'>
        {!selectPok ? (
          <h1>Select pokemon</h1>
        ) : (
          <>
          <h1>{pokDetail.name}</h1>
          <img src={pokDetail.img} alt="Pokemon Picture" />
          <h2>{pokDetail.abilities}</h2>
          <h2>{pokDetail.abilities1}</h2>
          </>
        )}
       </div>
     
    </div>
  );
}

export default App;
