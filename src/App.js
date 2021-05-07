import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { Navigation } from './layout/Navigation';
import Cards from './apps/cards/App';
import { Results } from './rxjs/Results';
import { GitHubCard } from './apps/GitHubCard/GitHubCard';
import { NavMeal } from './apps/meal-traker/NavMeal';
import { HomePage as MealTracker } from './apps/meal-traker/home';
import { AddIngredientPage } from './apps/meal-traker/ingredients';
import { RecipeSearchPage } from './apps/meal-traker/recipes';
import { ShoppingListPage } from './apps/meal-traker/shopping-list';
import { TodoApp } from './apps/todos/TodoApp';
import { GameXO } from './games/x-o/x-o';
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

const App = () => {
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <header className="mb-5">
            <Navigation />
          </header>
          <Switch>
            <Redirect from="/cards" to="/" />
            <Route path="/" component={Cards} exact />
            <Route path="/todo" component={TodoApp} exact />
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
                <Route path="/members-only" component={GroupsListPage} exact />
                <Route path="/members-only/groups/:id" component={GroupPage} />
                <Route path="/members-only/sign-in" component={SignInPage} />
                <Route
                  path="/members-only/create-group"
                  component={CreateGroupPage}
                />
              </BrowserRouter>
            </Route>
            <Route path="/x-o" component={GameXO} exact />
            <Route path="/star-match" component={StarMatch} exact />
            <Route component={NotFoundPage} />
          </Switch>
          <footer
            className="d-flex align-items-center justify-content-center bg-dark text-white"
            style={{ minHeight: '13.5vh' }}
          >
            © Copyright 2021 Traian Alexandru - All Rights Reserved
          </footer>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
};

export default App;
