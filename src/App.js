import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './App.css';
import { Navigation } from './layout/Navigation';
import Cards from './apps/cards/App';
import { Results } from './rxjs/Results';
import { HomePage as MealTracker } from './apps/meal-traker/home';
import { AddIngredientPage } from './apps/meal-traker/ingredients';
import { RecipeSearchPage } from './apps/meal-traker/recipes';
import { ShoppingListPage } from './apps/meal-traker/shopping-list';
import { PrivateRoute } from './common/auth';
import { TodoApp } from './apps/todos/TodoApp';
import { GameXO } from './games/x-o/x-o';
import { DataProvider } from './common/hooks/Providers/DataProvider';
import { StarMatch } from './games/star-match/StarMatch';
import { NotFoundPage } from './common/components/NotFoundPage';
import { GroupPage, GroupsListPage } from './apps/members-only/groups';
import { SignInPage } from './common/auth';
import {
  BrowsePhotosPage,
  PhotoDetailPage,
  UploadPhotoPage,
} from './apps/photo-sharing/photos';
import { GitHubCard } from './apps/GitHubCard/GitHubCard';
import { GithubSearch } from './apps/github-search/GithubSearch';
import { SideNav } from './layout/SideNav';
import { DashboardStocks } from 'apps/stock-trading/dashboard';
import { GoogleSheet } from 'apps/google-sheet/GoogleSheet';

toast.configure();

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <Navigation toggleNav={toggleNav} />
          <SideNav isOpen={isOpen} />
          <ToastContainer />
          <Switch>
            <Redirect from="/cards" to="/" />
            <Route path="/" component={Cards} exact />
            <Route path="/todo" component={TodoApp} exact />
            <Route path="/results" component={Results} exact />
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
            <Route path="/sign-in" component={SignInPage} exact />
            <PrivateRoute
              path="/members-only"
              component={GroupsListPage}
              exact
            />
            <PrivateRoute
              path="/members-only/groups/:id"
              component={GroupPage}
              exact
            />
            <PrivateRoute
              path="/photo-sharing"
              component={BrowsePhotosPage}
              exact
            />
            <PrivateRoute
              path="/photo-sharing/upload-photo"
              component={UploadPhotoPage}
              exact
            />
            <PrivateRoute
              path="/photo-sharing/photos/:id"
              component={PhotoDetailPage}
              exact
            />
            <Route path="/x-o" component={GameXO} exact />
            <Route path="/star-match" component={StarMatch} exact />
            <Route path="/github-search" component={GithubSearch} exact />
            <Route path="/github-card" component={GitHubCard} exact />
            <Route path="/stocks" component={DashboardStocks} exact />
            <Route path="/google-sheet" component={GoogleSheet} exact />
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
        <footer
          className="d-flex align-items-center justify-content-center bg-dark text-white"
          style={{ minHeight: '14.6vh' }}
        >
          © Copyright {new Date().getFullYear()} Traian Alexandru - All Rights
          Reserved
        </footer>
      </DataProvider>
    </div>
  );
};

export default App;
