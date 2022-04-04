import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import AllReviwes from './Components/AllReviwes/AllReviwes';
import Blogs from './Components/Blogs/Blogs';
import DashBoard from './Components/Dashboard/DashBoard';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/allreviwes' element={<AllReviwes></AllReviwes>}></Route>
       <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
       
     </Routes>
    </div>
  );
}

export default App;
