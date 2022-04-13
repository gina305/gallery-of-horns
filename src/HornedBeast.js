import React from "react"; //Import the React Component
import { render } from "react-dom";
import './App.css' //Link CSS file
//Create an app compnent from react's original component. Similar to how classes work


class HornedBeast extends React.Component {
constructor(props){
  super(props);
  this.state={
    faves:0,
  };
}

favored = () => {
this.setState({
  faves: this.state.faves + 1
});
}
  //Rerun JSX - which allows us to use javascript to render html
  render(title) {

    //Wrap JSX in empty tags (fragments)
    return <>
      <article id={this.props.id}>
        <h2>{title}</h2>
        
        <img src={this.props.img} alt={this.props.title}></img>
            <p >Title: {this.props.title}</p>
            <p>{this.state.faves}</p>
            <p onClick={this.favored}>Favorite</p>
        <p>{this.props.description}</p>
        <p>Horns: {this.props.horns}</p>
        <p>Keyword(s): {this.props.keyword}</p>
      </article>
    </>
   
  }

}



//Make the horned beast component to make it available for to other components
export default HornedBeast; 