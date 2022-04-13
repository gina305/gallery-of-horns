import React from "react"; //Import the React Component
import './App.css' //Link CSS file
import HornedBeast from "./HornedBeast";
import data from './data/data.json' //Import JSON data


class Main extends React.Component{
//Return JSX an render data on the page
render(){
  let renderedBeasts =[];

//Loop through imported array of object literals
data.forEach((beastObj) => {
  const id = beastObj._id;
  const title = beastObj.title;
  const description = beastObj.description;
  const img = beastObj.image_url;
  const keyword = beastObj.keyword;
  const horns = beastObj.horns;
  
  
  // Pass props for each beast to the HornedBeast component
  renderedBeasts.push(
    <HornedBeast 
    id = {id}
    title = {title}
    description = {description}
    img = {img}
    keyword = {keyword}
    horns = {horns}
    />
  );
 
});

  
  
    //Use empty tags (fragments)
    return <> 
      <main>
      {renderedBeasts}
      </main>
    </>

  }

}



export default Main; //Make the component available for import