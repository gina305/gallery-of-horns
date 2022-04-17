import React from "react"; //Import the React Component
import Header from './Header.js' //Import the Header (or whatever you want to name it) from the .js file
// import Main from './Main.js'
import Footer from './Footer.js'
import data from './data/data.json' //Import JSON data
import HornedBeast from "./HornedBeast.js";
import { useState } from 'react';
import SelectedBeast from './SelectedBeast'

    let array=[];
    
    function beastmode (){(data.forEach((beastObj) => {
      const id = beastObj._id;
      const title = beastObj.title;
      const description = beastObj.description;
      const img = beastObj.image_url;
      const keyword = beastObj.keyword;
      const horns = beastObj.horns;
      
      //Create a new Horned beast component based on
      array.push(
        <HornedBeast 
        id = {id}
        title = {title}
        description = {description}
        img = {img}
        keyword = {keyword}
        horns = {horns}
        key ={id}
        />
      )      
      }))}

      let beastFunction = beastmode();

      //Create an app compnent from react's original component. Similar to how classes work
class App extends React.Component {
  //Retrun JSX - which allows us to use javascript to render html
  render() {
    //Use empty tags (fragments)
    return (<>
        {/* //Contents of the header component are rendered here. */}
        <Header />
        <div id='beastDiv'>
        {array}
        </div>
     <Footer/>
    </>)

  }

}
//Make component available for import


export default App;
