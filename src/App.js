import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Navigation from "./layout/Navigation";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import { Results } from "./rxjs/Results";
import AppXo from "./games/x-o";
import { DataProvider } from "./Providers/DataProvider";

function App() {
  return (
    <div className="App">
      <DataProvider>
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
      </DataProvider>
    </div>
  );
}

export default App;
