import React from "react"; //Import the React Component
import Header from './Header.js' //Import the Header (or whatever you want to name it) from the .js file
import Main from './Main.js'
import Footer from './Footer.js'
import data from './data/data.json' //Import JSON data
import HornedBeast from "./HornedBeast.js";
import { useState } from 'react';
import SelectedBeast from './SelectedBeast'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

//Create an app component from react's original component. Similar to how classes work
class App extends React.Component {

  //Constructors are used to:
  // - Initialize the local state of the component by assigning an object to this.state
  // - Bind event handlers that occur in the component
  constructor(props) {

  //Used for passing data from one component to another. It allows you to set property or use 'this' inside the constructor
    super(props);
    this.state = {
      selectedBeastObj: {},
      showModal: true, //change after test
      beastName: '',
      beasts: data
    };
  }

  modalBeast =  (beastObj) =>{

    this.setState({
      selectedBeastObj: beastObj
    })
    console.log(beastObj);
  };

  //Modal handlers

  hideModal = () => {
    this.setState({
      showModal: false
    });
  }

  showModal = () => {
    this.setState({
      showModal: true
    });

  }
  //Render calculated values
  render() {
    let array = [];

    //Declare a function 
    function beastmode() {
      (data.forEach((beastObj) => {
        const id = beastObj._id;
        const title = beastObj.title;
        const description = beastObj.description;
        const img = beastObj.image_url;
        const keyword = beastObj.keyword;
        const horns = beastObj.horns;

        //Create a new Horned beast component based on
        array.push(
          <HornedBeast
            id={id}
            title={title}
            description={description}
            img={img}
            keyword={keyword}
            horns={horns}
            key={id}
          />
        )
      }))
    }
    let beastFunction = beastmode();

    
    console.log(this.state)

    //Use empty tags (fragments)
    return (<>
      {/* //Contents of the header component are rendered here. */}
      <Header modalBeast={this.modalBeast}/>
      {/* Pass these values to the following values to the Main component */}
      <Main array={this.state.beasts} modalBeast={this.modalBeast} showModal = {this.showModal}/>
      {/* Boostrap created the Modal Component */}
      <Modal show={this.state.showModal} onHide={this.hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Beast: {this.state.selectedBeastObj.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Woohoo, you're reading this text in a modal!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.hideModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </>)
  }
}
//Make component available for import
export default App;
