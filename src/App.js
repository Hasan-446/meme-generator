
import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";


function App(){
  return(
   <div className="container">
     <link href="https://fonts.googleapis.com/css2?family=Karla" rel="stylesheet"></link>
     <Header/>
     <Meme/>
   </div>
  )
}

export default App;