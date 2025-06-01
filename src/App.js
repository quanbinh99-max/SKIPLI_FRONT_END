
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import GithubSearchPage from './pages/GithubSearchPage';
import { getPhoneFromLocalStorage } from './utils/storage';

function App() {
  const isAuthenticated = !!getPhoneFromLocalStorage();
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/search" replace />
            ) : (
              <Navigate to="/auth" replace />
            )
          }
        />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/search" element={<GithubSearchPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
