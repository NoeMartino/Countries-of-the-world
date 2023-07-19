import './App.css';
import Welcome from './components/welcome/Welcome';
import Home from './components/home/Home';
import Form from './components/form/Form';
import Detail from './components/detail/Detail';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
axios.defaults.baseURL = 'https://countries-of-the-world-o44g.vercel.app';
//axios.defaults.baseURL = 'http://localhost:3001';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/form" element={<Form />} />
        <Route exact path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;