//import logo from './logo.svg';
import './App.css';
import food from './food.png';
import React,{useEffect} from "react";
import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import {Home, About, Events, Contact} from "./pages";

const menu=["Chicken Shaslik", "Chicken Gravy", "Pizza","Roast"];
const menuObject= menu.map((i,desc)=>({id:i, description:desc}));

//menu.map((dish)=>{console.log(dish)});

function Header(props){

  return(
  <header>
    <h1>{props.name}'s Restaurant</h1>
  </header>);
}

function Main(props){
return(
<main>
  <h2>
    We serve Awwwsomelicious fooooooddddddd...
  </h2>
  <img src={food} height={400} width={800} alt="Dining tables and wall art"/>
  

  <ul style={{textAlign:"left"}} >
    {props.menu.map((m)=>(<li key={m.description} > {m.id}</li>))}
    


    </ul>
  </main>

)


}



function App() {
const [emotion,setEmotion]= useState("Happy");
console.log("My Current Mood is"+ emotion);



  return (
    <div className="App">
       <Header name="Ghassan Sohail"/>
       <Main menu={menuObject}/>
       <h1>My Current Mood is {emotion}</h1>
       <button onClick={()=>{setEmotion("Enthusiasted")}} >
         Entusiate
       </button>      
       <button onClick={()=>{setEmotion("Happy")}} >
         Happify
       </button>      
       <input  type="checkbox" value="false" onChange="true"></input>
      
      

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/event" element={<Events/>} />
        <Route path="/contact" element={<Contact/>} />                              
        {/* <Route path="/*" element={<Whoops/>} />                               */}
        </Routes>
    </div>
  );
}

export default App;
