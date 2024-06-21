import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddCard from './components/AddCard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/addCard' element={<AddCard/>} />
      </Routes>
    </Router>
  );
}

export default App;
