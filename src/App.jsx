import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import GamePage from './pages/Game';
import HomePage from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/scores" element={<h1>Scores</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
