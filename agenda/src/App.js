import logo from './logo.svg';
import './App.css';
import Agenda from './components/Agenda.jsx';
import UserDetails from './components/UserDetails.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Agenda />} />
          <Route path="/userdetails" element={<UserDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
