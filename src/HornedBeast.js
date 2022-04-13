import React from "react"; //Import the React Component
import { render } from "react-dom";
import './HornedBeast.css'
import Card from 'react-bootstrap/Card';


//Create an app component from react's original component. Similar to how classes work
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
    <article>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.img} alt={this.props.title} onClick={this.favored}/>
        <Card.Body>
        <p >Favs: {this.state.faves}</p>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
          {this.props.description}
          </Card.Text>
          <Card.Text style={{ display: 'block' }}>
          Horns: {this.props.horns}
          </Card.Text>
          <Card.Text>
          Keyword(s): {this.props.keyword}
          </Card.Text>
        </Card.Body>
      </Card>
      </article>
    </>
   
  }

}



//Make the horned beast component to make it available for to other components
export default HornedBeast; 