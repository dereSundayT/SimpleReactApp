//API is communication protocol between different parts of a computer program

/*
//4.ReactDOM & JSX
import React from 'react'
import ReactDOM from 'react-dom'
ReactDOM.render(<div><h1>Hello world</h1><p>My Name is James </p></div>,document.getElementById("root"))
*/
/*
//5.ReactDOM &  JSX Practice
import React from 'react'
import ReactDOM from 'react-dom'
ReactDOM.render(
<ul> 
    <li>Tolu</li>
    <li>Shola</li>
    <li>Lola</li>
</ul>,
document.getElementById('root')
*/

/*
//6.Function Components
import React from 'react'
import ReactDOM from 'react-dom'
function MyApp(){
    return(
    <ul>
        <li>Bola</li>
        <li>SHola</li>
        <li>Tolu</li>
    </ul>
    )
}
ReactDOM.render( 
    <MyApp />,
    document.getElementById('root')
)
*/

/*
//7.Functional Components Practice
import React from "react";
import ReactDOM from "react-dom";
function MyInfo() {
  return (
    <div>
      <h1>Dere Sunday T</h1>
      <p>I am a software developer</p>
      <ul>
        <li>Andela</li>
        <li>Google</li>
        <li>China</li>
      </ul>
    </div>
  );
}
ReactDOM.render(<MyInfo />, document.getElementById("root"));
*/

/*
//8.Move Components into separate files
import React from 'react'
import ReactDOM from 'react-dom'
import MyInfo from './components/MyInfo'

ReactDOM.render(
    <MyInfo />,
    document.getElementById('root')
)

*/
/*
//9. Parent/Child Components
import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
ReactDom.render(
    <App />,
    document.getElementById('root')
)

*/
/*
import React  from "react"
import NavBar from "./NavBar"
import MainContent from "./MainContent"
import Footer from "./components/Footer"
function App(){
    return(
        <div>
            <NavBar />
            <MainContent />
            <Footer />
        </div>
    )
}
export default App
*/
/*
//11.todo  app part 1
*/
/*
//12.Styling React With css classes
*/
//const App = {} => <h1>Error Function</h1>
/*14.JSX to JS and 
JS  -> JSX
import React from "react";
import ReactDOM from "react-dom";
//import App from "./App";
import './App.css'

function App(){
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    if(hours<12){
        timeOfDay= "morning"
    }else if(hours>=12 && hours <17){
        timeOfDay = "good afernoon"
    }else{
        timeOfDay = "night"
    }
    return (
        <div>
      <p>Good  {timeOfDay}</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
*/
//16. TodoApp Phase 2
/*
//17.PROPS PART 1:UNDERSTANGING THE CONCEPT
//18.Pros Part 2 - Reusable COmponents
//19. Props in React
pros -- property
import React from "react"
import ContactCard from "./ContactCard"
function App() {
  return (
    <div>
      <ContactCard 
          name="Mr John" 
          imgUrl="dog.pnh"
          phone="+234"
          email="deesuntech"
      />

<ContactCard 
          name="Mr John" 
          imgUrl="dog.pnh"
          phone="+234"
          email="deesuntech"
      />

<ContactCard 
          name="Mr John" 
          imgUrl="dog.pnh"
          phone="+234"
          email="deesuntech"
      />
<ContactCard 
          name="Mr John" 
          imgUrl="dog.pnh"
          phone="+234"
          email="deesuntech"
      />

    </div>
  );
}
export default App;
*/
//21.Mapping Components
/*
import React from "react";
import Joke from "./components/Joke";
import jokeData from './components/jokeData'
//checkout the link at scribma for this episode
function App() {
// const nameOfComponent = dataName.map(singleObjectName => <componentName  /> )
//the 'joke' will receive the individual object
const jokeComponents = jokeData.map( joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} /> )
  return (
    <div>
     {jokeComponents}
    </div>
  );
}

export default App;

*/

//23.TodoApp -Phase 3
//24.class based component
//25.class based component practice