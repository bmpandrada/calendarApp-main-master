import Create from './section/create.component';
import Login from './section/login.component';
import Filter from './section/filter.components';
import View from './section/view.component';
import {  Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Routes>
      <Route  path='/' element={<Login/>} />
      <Route exact path='/users' element={<Create/>} />
      <Route exact path='/filter' element={<Filter/>} />
      <Route exact path='/view' element={<View/>} />
    </Routes>
  );
}

export default App;
