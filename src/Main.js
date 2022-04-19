import React,{useState} from "react"; //Import the React Component
import App from './App'
import HornedBeast from './HornedBeast'
import Header from './Header'
import beastmode from './App'
import SelectedBeast from "./SelectedBeast";

  //Create an app component from react's original component. Similar to how classes work
  class Main extends React.Component {


    constructor(props) {

      //Used for passing data from one component to another. It allows you to set property or use 'this' inside the constructor
      super(props);
      this.state = {
        beasts: this.props.array
          //call the Selected Beast Component
       
      };
    }
  


///////////////////////////  
  //Map over the JSON data in your Main component to render each beast
    render() {  
  
      
      let beasts = this.props.array;
      const beastFunction = (beastObj) => {
        const beastComponent = beasts.map(function () {
          const id = beastObj._id;
          const title = beastObj.title;
          const description = beastObj.description;
          const img = beastObj.image_url;
          const keyword = beastObj.keyword;
          const horns = beastObj.horns;
          const modal = this.props.modal;

          console.log('function fired');
          beasts.push(
            <HornedBeast
              id={id}
              title={title}
              description={description}
              img={img}
              keyword={keyword}
              horns={horns}
              key={id}
              modal={modal}
              //Add function you wish to pass along to the horned beast component
              modalBeast={this.props.modalBeast}
              beasts ={beasts}
              showModal = {this.props.showModal}
            />)

      });
      };


      return (<>
      {/* Render beasts in the a div with the id of 'beastDiv' */}
        <div id='beastDiv'>
          {beasts}

          <SelectedBeast beasts = {this.state.beasts}/>

        </div>
      </>)

    }

  }
  //Make component available for import
  export default Main;