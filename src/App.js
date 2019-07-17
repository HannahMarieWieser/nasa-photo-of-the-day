import React, {useState, useEffect} from "react";

import axios from 'axios';
import "./App.css";

import Header from "./components/card/header";
import Cardinfo from "./components/card/daycard";



function App() {

  const [nasa, setNasa] = useState("")

  useEffect(() => {
  
    axios.get('GET https://api.nasa.gov/planetary/apod?api_key=Hu6MRWbnJ9Z6vRKWgagecXYGqfllCpI1jnBHfQZ4&date=2012-03-14 ')
      .then( element => {
        setNasa(element)
        console.log('element', element)
              
      });
      
  
      
      
  }, []);

  return (
    <div className="App">
      <p>
       
       <Header 
          title ={nasa.title}
          date = {nasa.date}
          author = {nasa.copyright}
        />

        <Cardinfo 
          imgurl = {nasa.url }
          blurb = {nasa.explanation}
        />
        
      </p>
    </div>
  );
}

export default App;
