import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages'
import SigninPage from './pages/signin'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="https://www.hermes-music.com.mx/assets/react/" element={<Home/>}  />   
        <Route exact path="/signin" element={<SigninPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
