import React from 'react';
import './App.css';



import SwitchContainer from "./components/SwitchContainer"



// Sovelluksen ylin komponentti, joka renderöidään index.js:ssä.


function App() {

  
  return(
  
    <div className="App">
     
      <SwitchContainer />
         
    </div>
    
    
  );
}


export default App