
import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import Footer from "./components/Footer";


function App(){
  return(
   <div className="container">
     <link href="https://fonts.googleapis.com/css2?family=Karla" rel="stylesheet"></link>
     <Header/>
     <Meme/>
     <Footer/>
   </div>
  )
}

export default App;