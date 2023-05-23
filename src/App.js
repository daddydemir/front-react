import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Prods } from './pages/prods/Prods';
import { Banner } from './components/Banner';
import { Contact } from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='home' element={<Main />} />
        <Route path='products' element={<Prods />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
