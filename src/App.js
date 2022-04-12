import React from "react"; //Import the React Component
import './App.css' //Link CSS file
//Create an app compnent from react's original component. Similar to how classes work
class App extends React.Component{

  //Retrun JSX - which allows us to use javascript to render html
  render(){
    //Use empty tags (fragments)
    return <> 
      <header>
        <h2> My first app</h2> <p>page 1</p>
      </header>
      <main>
        <article>
          <h3>photo here</h3>

        </article>
      </main>
    </>

}

}
export default App;
