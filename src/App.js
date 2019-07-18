import React, {useState, useEffect} from "react";

import axios from 'axios';
import "./App.css";

import Header from "./components/card/header";
import Cardinfo from "./components/card/daycard";


import Homelink from './components/card/Homelink'
import styled from 'styled-components'

const Pagebackground = styled.div`
  background-color: #e6f7ff;
`

const Daycarddiv = styled.div`
  color : #00344d0;
  
`


const Cardbox = styled.div`
  width: 700px;
  height: 100%;
  border: 2px black solid;
  margin: auto;
  background-color :white;
 
`;

function App() {

  const [nasa, setNasa] = useState("")

  useEffect(() => {
  
    axios.get('https://api.nasa.gov/planetary/apod?api_key=Hu6MRWbnJ9Z6vRKWgagecXYGqfllCpI1jnBHfQZ4&date=2012-03-14 ')
      .then( element => {
        setNasa(element.data)
        console.log('element', element)
              
      });
      
  
      
      
  }, []);

  return (
    <Pagebackground>


      <Cardbox>
        <div className="App">
          <p>


            <Daycarddiv>
              <Header 
                title ={nasa.title}
                date = {nasa.date}
                author = {nasa.copyright}
              />
            </Daycarddiv>


            
            <Cardinfo
              imgurl = {nasa.url}
              blurb = {nasa.explanation}
            />
            
            
            <Homelink >
              <a href="https://www.nasa.gov/" > NASA Home </a>
            </Homelink>
            
            
          </p>
        </div>
      </Cardbox>



    </Pagebackground>
  );
}

export default App;
