import React from "react"; //Import the React Component
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './HornedBeast.css'
import { IconName } from "react-icons/fa";
import App from './App'
import Main from './Main'


//Create an app component from react's original component. Similar to how classes work
class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faves: 0,
    };
  }


  favored = (beast) => {
    this.setState({
      faves: this.state.faves + 1,

    });
    //Call the modal function
    this.props.modalBeast(beast);
    this.props.showModal();
  }
  //**********************************//

  //Rerun JSX - which allows us to use javascript to render html
  render(title) {



    //Wrap JSX in empty tags (fragments)
    return (<>
      <article className="beast">
        <Card style={{ width: '18rem', margin: '5px', height: '30rem', color: 'black', border: '3px solid white', background: 'pink' }} selectedid={this.props.selectedid}>
          <Card.Img style={{ border: '2px solid purple', background: 'white' }} variant="top" src={this.props.img} alt={this.props.title} onClick={() =>this.favored(this.props.beast)} />
          <Card.Body>
            <p style={{ color: 'purple', }}> Faves: {this.state.faves} ♥️</p>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text style={{ color: 'black', display: 'block' }}>
              {this.props.description}
            </Card.Text>
            <Card.Text style={{ color: 'black', display: 'block' }}>
              Horns: {this.props.horns}
            </Card.Text>
            <Card.Text style={{ color: 'black', display: 'block' }}>
              Keyword(s): {this.props.keyword}
            </Card.Text>
          </Card.Body>
        </Card>
      </article>
    </>)

  }

}



//Make the horned beast component to make it available for to other components
export default HornedBeast; 