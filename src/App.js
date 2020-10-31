import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Navigation from "./layout/Navigation";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import { Results } from "./components/Results";
import AppXo from "./components/x-o";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <header className="App-header">
          <Switch>
            <Redirect from="/home" to="/" />
            <Route path="/" component={Page1} exact />
            <Route path="/page2" component={Page2} exact />
            <Route path="/results" component={Results} exact />
            <Route path="/x-o" component={AppXo} exact />
          </Switch>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
