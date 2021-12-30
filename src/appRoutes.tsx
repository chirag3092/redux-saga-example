import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Todo from './components/Todo';

function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/to-do" element={<Todo />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Suspense>
  );
}
export default AppRoutes;
