import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserArea from './components/UserArea/UserArea';
import ProfileCard from './components/ProfileCard/ProfileCard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserArea />} />
        <Route path="/profile" element={<ProfileCard />} />
      </Routes>
    </Router>
  );
}

export default App;
