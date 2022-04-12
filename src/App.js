import React from "react"; //Import the React Component
import Header from './Header.js' //Import the Header Component
import Main from './Main.js'
import Footer from './Footer.js'
import './App.css' //Link CSS file
//Create an app compnent from react's original component. Similar to how classes work
class App extends React.Component {

  //Retrun JSX - which allows us to use javascript to render html
  render() {
    //Use empty tags (fragments)
    return <>
      <header>
        {/* //Contents of the header component are rendered here. */}
        <Header />
        <Main/>
        <Footer/>
      </header>
     
    </>

  }

}
export default App;

//NOTE: COMPONENTS ARE LISTED IN THE src FOLDER