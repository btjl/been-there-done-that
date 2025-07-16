import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import VideoMap from './pages/VideoMap';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map/:id" element={<VideoMap />} />
      </Routes>
    </Router>
  );
}
