import React from 'react';
//import LocaleProvider from "./components/LocaleContext"
//import ToggleLocale from "./components/ToggleLocale"
import "./App.css"
import { Button } from "./components/SmallComp"
import Header from "./components/Header"
import Tabs from "./components/Tabs"


function App() {
  return (
    <>
    
    <Header />
    
    
    <h3>This is the portfolio..</h3>
    <Tabs>
      <div label="allig">See you later Alligator</div>
      <div label="croco">After a while crocodile</div>
      <div label="nothing">There is nothing here</div>
    </Tabs>
    
    <Button>Button</Button>
    
    </>
  );
}

export default App;


//<ToggleLocale />