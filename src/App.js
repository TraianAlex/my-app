import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { Navigation } from './layout/Navigation';
import Cards from './apps/cards/App';
import { Results } from './rxjs/Results';
import { HomePage as MealTracker } from './apps/meal-traker/home';
import { AddIngredientPage } from './apps/meal-traker/ingredients';
import { RecipeSearchPage } from './apps/meal-traker/recipes';
import { ShoppingListPage } from './apps/meal-traker/shopping-list';
import { PrivateRoute, useUser } from './apps/members-only/auth/';
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
import { NavPhotos } from 'apps/photo-sharing/navigation';
import {
  PrivateRoutePhotos,
  SignInPhotos,
  useUserPhotos,
} from 'apps/photo-sharing/auth';
import {
  BrowsePhotosPage,
  PhotoDetailPage,
  UploadPhotoPage,
} from 'apps/photo-sharing/photos';
import { GitHubCard } from './apps/GitHubCard/GitHubCard';
import { GithubSearch } from 'apps/github-search/GithubSearch';

const App = () => {
  const { isLoading: isLoadingMembers, user: userMembers } = useUser();
  const { isLoading: isLoadingPhotos, user: userPhotos } = useUserPhotos();

  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <Navigation />
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
            <Route path="/members-only">
              <BrowserRouter>
                <NavMembers user={userMembers} />
                <Route
                  path="/members-only/sign-in"
                  component={SignInPage}
                  exact
                />
                <PrivateRoute
                  isLoading={isLoadingMembers}
                  isAuthed={!!userMembers}
                  path="/members-only"
                  component={GroupsListPage}
                  exact
                />
                <PrivateRoute
                  isLoading={isLoadingMembers}
                  isAuthed={!!userMembers}
                  path="/members-only/groups/:id"
                  component={GroupPage}
                  exact
                />
                <PrivateRoute
                  isLoading={isLoadingMembers}
                  isAuthed={!!userMembers}
                  path="/members-only/create-group"
                  component={CreateGroupPage}
                  exact
                />
              </BrowserRouter>
            </Route>
            <Route path="/photo-sharing">
              <BrowserRouter>
                <NavPhotos user={userPhotos} />
                <Route
                  path="/photo-sharing/sign-in"
                  component={SignInPhotos}
                  exact
                />
                <PrivateRoutePhotos
                  isLoading={isLoadingPhotos}
                  isAuthed={!!userPhotos}
                  path="/photo-sharing"
                  component={BrowsePhotosPage}
                  exact
                />
                <PrivateRoutePhotos
                  isLoading={isLoadingPhotos}
                  isAuthed={!!userPhotos}
                  path="/photo-sharing/upload-photo"
                  component={UploadPhotoPage}
                  exact
                />
                <PrivateRoutePhotos
                  isLoading={isLoadingPhotos}
                  isAuthed={!!userPhotos}
                  path="/photo-sharing/photos/:id"
                  component={PhotoDetailPage}
                  exact
                />
              </BrowserRouter>
            </Route>
            <Route path="/x-o" component={GameXO} exact />
            <Route path="/star-match" component={StarMatch} exact />
            <Route path="/github-search" component={GithubSearch} exact />
            <Route path="/github-card" component={GitHubCard} exact />
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
        <footer
          className="d-flex align-items-center justify-content-center bg-dark text-white"
          style={{ minHeight: '14.6vh' }}
        >
          © Copyright 2021 Traian Alexandru - All Rights Reserved
        </footer>
      </DataProvider>
    </div>
  );
};

export default App;
