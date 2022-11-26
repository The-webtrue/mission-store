import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './components/About/About';
import Footer from './components/Common/Footer';
import Header from './components/Common/Header';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Post from './components/Post/Post';
import Products from './components/Products/Products';
import SingleProducts from './components/SingleProducts/SingleProducts';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element ={<Home></Home>}/>
          <Route path='about' element={<About/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='products/:productsId' element={<SingleProducts/>}/>
          <Route path='post' element={<Post/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
