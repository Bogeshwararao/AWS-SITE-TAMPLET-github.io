import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { Switch, Route } from "react-router-dom";

//Components Imports section
import Navbar from "./Components/Navbar.js";
// import Header from "./Components/Header";

// Importing screens
import Home from "./Screens/Home";
import About from "./Screens/About";
import Blogs from "./Screens/Bolgs";
import Projects from "./Screens/Projects";
import Contact from "./Screens/Contact";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
       <Route exact path="/About" component={About} />
        <Route exact path="/Blogs" component={Blogs} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Contact" component={Contact} />
        <Redirect to="/" />
      </Switch>

      {/* <Header /> */}
      {/* <h2>Let's do this...</h2> */}
    </div>
  );
}

export default App;
