import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Navigation from './layout/Navigation';
import { Home } from './common/components/Home';
import { Page2 } from './common/components/Page2';
import { Results } from './rxjs/Results';
import { GitHubCard } from './apps/GitHubCard/GitHubCard';
import { NavMeal } from './apps/meal-traker/NavMeal';
import { HomePage as MealTracker } from './apps/meal-traker/home';
import { AddIngredientPage } from './apps/meal-traker/ingredients';
import { RecipeSearchPage } from './apps/meal-traker/recipes';
import { ShoppingListPage } from './apps/meal-traker/shopping-list';
import AppXo from './games/x-o/x-o';
import { DataProvider } from './common/hooks/Providers/DataProvider';
import { StarMatch } from './games/star-match/StarMatch';
import { NotFoundPage } from './common/components/NotFoundPage';
import {
  CreateGroupPage,
  GroupPage,
  GroupsListPage,
} from './apps/members-only/groups';
import { SignInPage } from './apps/members-only/auth';
import { NavMembers } from './apps/members-only/navigation';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <Navigation />
          <header className="App-header">
            <Switch>
              <Redirect from="/home" to="/" />
              <Route path="/" component={Home} exact />
              <Route path="/page2" component={Page2} exact />
              <Route path="/results" component={Results} exact />
              <Route path="/github-card" component={GitHubCard} exact />
              <Route path="/meal-tracker">
                <BrowserRouter>
                  <NavMeal />
                  <Route path="/meal-tracker" component={MealTracker} exact />
                  <Route
                    path="/meal-tracker/add-ingredient"
                    component={AddIngredientPage}
                    exact
                  />
                  <Route
                    path="/meal-tracker/recipes"
                    component={RecipeSearchPage}
                    exact
                  />
                  <Route
                    path="/meal-tracker/shopping-list"
                    component={ShoppingListPage}
                    exact
                  />
                </BrowserRouter>
              </Route>
              <Route path="/members-only">
                <BrowserRouter>
                  <NavMembers />
                  <Route
                    path="/members-only"
                    component={GroupsListPage}
                    exact
                  />
                  <Route
                    path="/members-only/groups/:id"
                    component={GroupPage}
                  />
                  <Route path="/members-only/sign-in" component={SignInPage} />
                  <Route
                    path="/members-only/create-group"
                    component={CreateGroupPage}
                  />
                </BrowserRouter>
              </Route>
              <Route path="/x-o" component={AppXo} exact />
              <Route path="/star-match" component={StarMatch} exact />
              <Route component={NotFoundPage} />
            </Switch>
          </header>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
