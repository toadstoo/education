import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import LecturerDetailPage from './pages/LecturerDetailPage';
import LecturersPage from './pages/LecturersPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/lecturers" element={<LecturersPage />} />
        <Route path="/lecturers/:id" element={<LecturerDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
