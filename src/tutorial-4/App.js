import React, { useState } from "react";
import "./App.css";
import EmptyBlock from "./components/EmptyBlock";
import Phrase from "./components/Phrase";
import adjectivesArr from './adjectivesArr'
import nounsArr from "./nounsArr";

const App = () => {

  const [arrPhrase, setArrPhrase] = useState([]);

  const generatePhrase = () => {
      const rand1 = Math.floor(Math.random() * adjectivesArr.length)
      const rand2 = Math.floor(Math.random() * adjectivesArr.length)
      const rand3 = Math.floor(Math.random() * nounsArr.length);
      let phrase = adjectivesArr[rand1] + " " + adjectivesArr[rand2] + " " + nounsArr[rand3];
      setArrPhrase([...arrPhrase, phrase]);
      console.log(arrPhrase);
    
  }
  
  const clerListHandel = () => {
    setArrPhrase([]);
  };

  return (
    <div className="wrapper">
      <div className="list">
        {   
         arrPhrase.length ? arrPhrase.map((item,i) => <Phrase key={i} phrase={item} />) : <EmptyBlock />  
        }
      </div>
      <div className="wrapper_btn">
        <button className="btn btn_generate" onClick={generatePhrase}>
          Сгенерировать
        </button>
        <button className="btn btn_clear" onClick={clerListHandel}>
          Очистить
        </button>
      </div>
    </div>
  );
};

export default App;
