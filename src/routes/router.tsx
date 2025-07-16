import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom';
//Layouts
import { RootLayout } from 'layouts/RootLayout';
import ComponentTest from 'components/ComponentTest';
import { CategoryLayout } from 'layouts/CategoryLayout';
import { SubCategoryLayout } from 'layouts/SubCategoryLayout';
import { TopicLayout } from 'layouts/TopicLayout';
import { TechLayout } from 'layouts/TechLayout';
import { WeatherLayout } from 'layouts/WeatherLayout';
//View
import { WeatherView } from 'pages/weather/WeatherView';
import { CategoryEditView } from 'pages/category/CategoryEditView';
import { SubCategoryEditView } from 'pages/subCategory/SubCategoryEditView';
import { TopicEditView } from 'pages/topic/TopicEditView';
import { TechView } from 'pages/tech/TechView';
import { LoginView } from 'pages/auth/LoginView';
import { SignupView } from 'pages/auth/SignupView';
import { NotFound } from 'pages/base/NotFound';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Navigate to="/weather/dallas" />} />
      <Route path="weather" element={<WeatherLayout />}>
        <Route path=":city" element={<WeatherView />} />
      </Route>
      <Route path="test" element={<ComponentTest />} />
      <Route path="category" element={<CategoryLayout />}>
        <Route path=":categoryId" element={<CategoryEditView />} />
      </Route>
      <Route path="subCategory" element={<SubCategoryLayout />}>
        <Route path=":subCategoryId" element={<SubCategoryEditView />} />
      </Route>
      <Route path="topic" element={<TopicLayout />}>
        <Route path=":topicId/:categoryId" element={<TopicEditView />} />
      </Route>
      <Route path="tech" element={<TechLayout />}>
        <Route path=":abbr" element={<TechView />} />
      </Route>
      <Route path="login" element={<LoginView />} />
      <Route path="signup" element={<SignupView />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);
