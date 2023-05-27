import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Prods } from './pages/prods/Prods';
import { Contact } from './components/Contact';
import Products from './pages/prods/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='home' element={<Main />} />
        <Route path='prods' element={<Prods />} />
        <Route index element={<Products />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
