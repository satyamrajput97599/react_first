import './App.css';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Course from './component/Course';
import Data from './component/Data';
import Opr from './component/Opr';
import Opr1 from './component/Opr1';
import Student from './component/Student';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Nav from './component/Nav';
import Calculater from './component/Calculater';
import API from './component/API';
import API2 from './component/API2';
import Data1 from './component/Data1';
import Show from './component/Show';
import Insert from './component/Insert';
import Delete from './component/Delete';
import Edit from './component/Edit';
import Login from './component/Login';

import NotFound from './component/NotFound';


function App()
{
  return(
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/data' element={<Data/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/opr' element={<Opr/>}/>
        <Route path='/opr1' element={<Opr1/>}/>
        <Route path='/Calculater' element={<Calculater/>}/>
        <Route path='/API' element={<API/>}/>
        <Route path='/API2' element={<API2/>}/>
        <Route path='/api3' element={<Data1/>}/>
        <Route path='/fpi1' element={<Show/>}/>
        <Route path='/Insert' element={<Insert/>}/>
        <Route path='/delete/:id' element={<Delete/>}/>
        <Route path='/Edit' element={<Edit/>}/>
        <Route path='/Login' element={<Login/>}/>
        
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
