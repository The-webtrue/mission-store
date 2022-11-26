import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './components/About/About';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Post from './components/Post/Post';
import Products from './components/Products/Products';
import SingleProducts from './components/SingleProducts/SingleProducts';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MainLayout from './components/Layout/MainLayout';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
   
        <Routes>
          <Route path='/' element={<MainLayout/>}>
          <Route index element ={<Home></Home>}/>
          <Route path='about' element={<About/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='products/:productsId' element={<SingleProducts/>}/>
          <Route path='post' element={<Post/>}/>
          <Route path='*' element={<Error/>}/>
          </Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
