import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/todo" element={<TodoApp />} />
            <Route path="/results" element={<Results />} />
            <Route path="/meal-tracker" element={<MealTracker />} />
            <Route
              path="/meal-tracker/add-ingredient"
              element={<AddIngredientPage />}
            />
            <Route
              path="/meal-tracker/recipes"
              element={<RecipeSearchPage />}
            />
            <Route
              path="/meal-tracker/shopping-list"
              element={<ShoppingListPage />}
            />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route
              path="/members-only"
              element={
                <PrivateRoute>
                  <GroupsListPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/members-only/groups/:id"
              element={
                <PrivateRoute>
                  <GroupPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/photo-sharing"
              element={
                <PrivateRoute>
                  <BrowsePhotosPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/photo-sharing/upload-photo"
              element={
                <PrivateRoute>
                  <UploadPhotoPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/photo-sharing/photos/:id"
              element={
                <PrivateRoute>
                  <PhotoDetailPage />
                </PrivateRoute>
              }
            />
            <Route path="/x-o" element={<GameXO />} />
            <Route path="/star-match" element={<StarMatch />} />
            <Route path="/github-search" element={<GithubSearch />} />
            <Route path="/github-card" element={<GitHubCard />} />
            <Route path="/stocks" element={<DashboardStocks />} />
            <Route path="/google-sheet" element={<GoogleSheet />} />
            <Route path="/cards" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
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
