import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
//Layouts
import { RootLayout } from 'layouts/RootLayout';
import ComponentTest from 'components/ComponentTest';
import { CategoryLayout } from 'layouts/CategoryLayout';
import { SubCategoryLayout } from 'layouts/SubCategoryLayout';
import { TopicLayout } from 'layouts/TopicLayout';
import { TechLayout } from 'layouts/TechLayout';
// import { WeatherLayout } from 'layouts/WeatherLayout';
// import { TestLayout } from 'layouts/TestLayout';
//View
// import { WeatherView } from 'pages/weather/WeatherView';
import { CategoryEditView } from 'pages/category/CategoryEditView';
import { SubCategoryEditView } from 'pages/subCategory/SubCategoryEditView';
import { TopicEditView } from 'pages/topic/TopicEditView';
import { TechView } from 'pages/tech/TechView';
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
      <Route path="category" element={<CategoryLayout />}>
        <Route path=":id" element={<CategoryEditView />} />
      </Route>
      <Route path="subCategory" element={<SubCategoryLayout />}>
        <Route path=":id" element={<SubCategoryEditView />} />
      </Route>
      <Route path="topic" element={<TopicLayout />}>
        <Route path=":topicId/:categoryId" element={<TopicEditView />} />
      </Route>
      <Route path="tech" element={<TechLayout />}>
        <Route path=":abbr" element={<TechView />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

// export const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route index element={<Navigate to="/weather/dallas" />} />
//       <Route path="weather" element={<WeatherLayout />}>
//         <Route path=":city" element={<WeatherView />} />
//       </Route>
//       <Route path="category" element={<CategoryLayout />}>
//         <Route path=":id" element={<CategoryEditView />} />
//       </Route>
//       <Route path="subCategory" element={<SubCategoryLayout />}>
//         <Route path=":id" element={<SubCategoryEditView />} />
//       </Route>
//       <Route path="topic" element={<TopicLayout />}>
//         <Route path=":topicId/:categoryId" element={<TopicEditView />} />
//       </Route>
//       <Route path="tech" element={<TechLayout />}>
//         <Route path=":abbr" element={<TechView />} />
//       </Route>
//       <Route path="login" element={<LoginView />} />
//       <Route path="signup" element={<SignupView />} />
//       <Route path="todo" element={<TodoView />} />
//       <Route path="test" element={<TestLayout />}>
//         <Route path=":id" element={<Demo />} />
//       </Route>
//       <Route path="demo" element={<Demo />} />
//       <Route path="*" element={<NotFound />} />
//     </Route>
