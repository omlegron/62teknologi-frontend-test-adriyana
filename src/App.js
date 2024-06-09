import React from 'react';
import { Route, Routes } from 'react-router-dom';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./assets/scss/style.scss"
// import "./assets/css/materialdesignicons.min.css"
import Index from './pages';
import Error from './pages/page-error';
import Detail from './pages/detail';

function App() {
  return (
    <Routes>
      <Route crossorigin path='/' element={<Index/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
  );
}
export default App;
