import React from "react"; //Import the React Component
import './App.css' //Link CSS file
import HornedBeast from "./HornedBeast";

class Main extends React.Component{

  //Retrun JSX - which allows us to use javascript to render html
  render(){
    //Use empty tags (fragments)
    return <> 
      <main>
        <HornedBeast title='beast1' imageUrl='https://opensanctuary.org/wp-content/uploads/2019/06/Lancaster-1024x1024.jpeg' description='goat'/>
        <HornedBeast title='Rhino Family' imageUrl='https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80' description='Parent rhino with two babies'/>
      </main>
    </>

}

}
export default Main; //Make the component available for import