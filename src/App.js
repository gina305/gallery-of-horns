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
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
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
      showModal: false,
      beastName: '',
      beasts: data,
      hornNum:0,

    };
  }

  modalBeast =  (beastObj) =>{

    //change the value of the selectedBeastObj to beastObj
    this.setState({
      selectedBeastObj: beastObj
    })
  };

  //*****************Modal handlers*********************
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

  //Function for handling the for change
  handleChange = (event) =>{
    event.preventDefault();
    //grab data from form
    let choice = event.target.value
    console.log(choice);

    //use a temporary array to hold the filtered data
    let filtered = []


    //Check for the submitted value and filter beast data based on that value
    if (choice === '1') {
      filtered = data.filter(beast => beast.horns === 1);
    } else if (choice === '2') {
      filtered = data.filter(beast => beast.horns === 2 && choice < 100);
    }
    else if (choice === '3') {
      filtered = data.filter(beast => beast.horns > 3);
    }
    else if (choice === 'show-all') {
      filtered = data
    }

    console.log(filtered);
    // set/change the filtered  data in state
    this.setState({
      beasts: filtered
    })
  };
  
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

    // things stored in state
    // console.log(this.state)


    //Use empty tags (fragments)
    return (<>
      {/* //Contents of the header component are rendered here. */}
      <Header modalBeast={this.modalBeast}/>

      {/********
       * * Horns Drop-down selection **********/}
      <Form>
        <Form.Group>
          <Form.Label className="bodyText">Filter by # of horns:</Form.Label>
          <Form.Select defaultValue="all" onChange={this.handleChange} className="options">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3 or more</option>
            <option value="show-all">All</option>
          </Form.Select>
        </Form.Group>
      </Form>
      
      {/* Pass these values to the following values to the Main component */}

      <Main array={this.state.beasts} modalBeast={this.modalBeast} showModal = {this.showModal}/>
      {/* Boostrap created the Modal Component */}
      <Modal show={this.state.showModal} onHide={this.hideModal} dialogClassName="modal-90w"  style={{ color: 'purple !important'}}>
        <Modal.Header closeButton>
          <Modal.Title>Beast: {this.state.selectedBeastObj.title}</Modal.Title>
        </Modal.Header>
        
        <Modal.Body><img src={this.state.selectedBeastObj.image_url} className='img-fluid rounded'
        alt='example'
        style={{ width: '500px' }}/>
        </Modal.Body>
         <p className="par">Description: {this.state.selectedBeastObj.description}</p>
         <p className="par">Keywords: {this.state.selectedBeastObj.keyword}</p>
         <p className="par">Horns: {this.state.selectedBeastObj.description}</p>
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
