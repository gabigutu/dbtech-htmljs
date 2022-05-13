import './App.css';
import AllUsers from './components/AllUsers';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserDetails from './components/UserDetails';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<AllUsers />} />
                    <Route path="/userdetails" element={<UserDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
