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
import { getProducts, getFirstLastName } from './util/fetch';
import Product from './components/Product';
import Register from './pages/Register';

function App() {
  const [error, setError] = useState(false);
  const [productList, setProductList] = useState(null);
  const [loading, setLoading] = useState(false);

  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('');


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
    console.log(login)
  }, []);

  if (!productList) {
    return <div className='text-center'>LOADING..</div>
  }

  return (
    <div className='App'>
      <NavBar username={username} login={login} fullName={fullName} setLogin={setLogin}></NavBar>
      <Routes>
        <Route path="/" element={<Home products={productList} setProductList={setProductList} />}></Route>
        <Route path="/caffeine" element={<Caffeine />}></Route>
        <Route path="/analyze" element={<TrendAnalysis />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/settings" element={<Settings email={email} setEmail={setEmail} username={username} setUsername={setUsername} fullName={fullName} setFullName={setFullName} />}></Route>
        <Route path='/products/:id' element={<Product products={productList} />}></Route>
        <Route path="/login" element={<Login email={email} setEmail={setEmail} loading={loading} setLoading={setLoading} login={login} setLogin={setLogin} username={username} setUsername={setUsername} setError={setError} error={error} fullName={fullName} setFullName={setFullName} />}></Route>
        <Route path='/register' element={<Register loading={loading} setLoading={setLoading} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
