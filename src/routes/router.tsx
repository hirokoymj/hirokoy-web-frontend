import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
//Layouts
import { RootLayout } from 'layouts/RootLayout';
import ComponentTest from 'components/ComponentTest';
// import { CategoryLayout } from 'layouts/CategoryLayout';
// import { SubCategoryLayout } from 'layouts/SubCategoryLayout';
// import { TopicLayout } from 'layouts/TopicLayout';
// import { TechLayout } from 'layouts/TechLayout';
// import { WeatherLayout } from 'layouts/WeatherLayout';
// import { TestLayout } from 'layouts/TestLayout';
//View
// import { WeatherView } from 'pages/weather/WeatherView';
// import { CategoryEditView } from 'pages/category/CategoryEditView';
// import { SubCategoryEditView } from 'pages/subCategory/SubCategoryEditView';
// import { TopicEditView } from 'pages/topic/TopicEditView';
// import { TechView } from 'pages/tech/TechView';
// import { LoginView } from 'pages/auth/LoginView';
// import { SignupView } from 'pages/auth/SignupView';
// import { TodoView } from 'pages/TodoView';
import { NotFound } from 'pages/base/NotFound';
// import { TestDetailView } from 'pages/test/TestDetailView';

const Demo = () => {
  return <h1>DEMO</h1>;
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="demo" element={<Demo />} />
      <Route path="test" element={<ComponentTest />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);
