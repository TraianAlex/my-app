import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Navigation from "./layout/Navigation";
import Page1 from "./common/components/Page1";
import Page2 from "./common/components/Page2";
import { Results } from "./rxjs/Results";
import { GitHubCard } from "./apps/GitHubCard/GitHubCard";
import AppXo from "./games/x-o/x-o";
import { DataProvider } from "./common/hooks/Providers/DataProvider";
import { StarMatch } from "./games/star-match/StarMatch";

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
              <Route path="/github-card" component={GitHubCard} exact />
              <Route path="/x-o" component={AppXo} exact />
              <Route path="/star-match" component={StarMatch} exact />
            </Switch>
          </header>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
