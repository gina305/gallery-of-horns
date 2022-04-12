import React from "react"; //Import the React Component
import './App.css' //Link CSS file
//Create an app compnent from react's original component. Similar to how classes work
class HornedBeast extends React.Component{

  //Retrun JSX - which allows us to use javascript to render html
  render(){
    //console.log(this.props.title);
    //Use empty tags (fragments)
    return <> 
        <h2> Narwhal</h2> 
        <img src='http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg' alt='' title='UniWhal'></img>
        <p>A unicorn and a narwhal nuzzling their horns</p>
    </>

}

}
export default HornedBeast; //Make the component available for import

