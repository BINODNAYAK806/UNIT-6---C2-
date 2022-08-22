import Slide from "./Components/Slide";
import "./App.css";
import React from "react";

// once you download the template; please run  "npm install" command and that will install all the packages required for this project by referencing package.json;

// do not remove any of the data-cy attributes;

// API to get the data : https://slides-app-220822.herokuapp.com/slides

export default function App() {
  const [count, setCount] = React.useState(1);
  const [disabled, setDisabled] = React.useState(false);
  const [disabled1, setDisabled1] = React.useState(false);


  const handelChange=(val)=>{

    if(count>0){

      setCount(count+val)
      if(count===2){
  
        setDisabled(true)
  
      }
      else{
        setDisabled(false)

      }


      if(count===4){

        setDisabled1(true)
      }
      else{

        setDisabled1(false)
      }

    }


  }

  return (
    <div className="App">
      <h1 data-cy="header">Slides{count}</h1>
      <Slide value={count} />
      <button data-cy="prev" disabled={disabled}  onClick={() => handelChange(-1)} >Prev</button>
      <button data-cy="next" disabled={disabled1}  onClick={() => handelChange(1)} >Next</button>
    </div>
  );
}

export { App };
