import React from "react"
import ReactDOM from "react-dom"

ReactDOM.render(
<ul>
  <li>helo</li>
  <li>tolu</li>
  <li>goat</li> 
</ul> ,
document.getElementById("root"))

































//import App from "./App";
//ReactDOM.render(<App />, document.getElementById("root"));
/*
class App extends React.Component {
  render() {
    return (
      <div>
        <Header username="DeeSunTech" />
        <Greeting />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}</p>
      </header>
    );
  }
}

class Greeting extends Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    if (hours < 12) {
      timeOfDay = "Morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon";
    } else {
      timeOfDay = "night";
    }
    return <h1> Good {timeOfDay} to you, sir or madam! </h1>;
  }
}
*/
//ReactDOM.render(<App />, document.getElementById("root"));