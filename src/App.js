import React from 'react';
import Home from './home';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Values from './values';
import About from './about';
import Homepage from './homepage';
import Accounts from './Accounts';
import Login from './login';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Home/>
   <Routes>
   {/* <Route index element={<Home/>}></Route> */}
      <Route path='values' element={<Values/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='homepage' element={<Homepage/>}></Route>
      <Route path='Accounts' element={<Accounts/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      
    </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
