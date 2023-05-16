import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from "react-router-dom"
import Caffeine from './pages/Caffeine';
import TrendAnalysis from './pages/TrendAnalysis'
import Contact from './pages/Contact';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Login from './pages/Login';
import { useEffect, useState } from 'react';
import { getProducts } from './util/fetch';
import Product from './components/Product';

function App() {
  const [error, setError] = useState(false);
  const [productList, setProductList] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    const response = await getProducts();
    if (response.error) {
      setError(response.error.name);
    }
    setProductList(response.data);
    setLoading(false);
    if (productList?.length > 0) {
      console.log(productList)
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (!productList) {
    return <div className='text-center'>Loading</div>
  }

  return (
    <div className='App'>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home products={productList} />}></Route>
        <Route path="/caffeine" element={<Caffeine />}></Route>
        <Route path="/analyze" element={<TrendAnalysis />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path='/:id' element={<Product />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
