import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register'
import NewSet from './pages/NewSet'
import Sets from './pages/Sets';
import PrivateRoute from './components/PrivateRoute'
import ViewSet from './pages/ViewSet';
import UpdateSet from './pages/UpdateSet'

function App() {
  return (
    <>
       <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/newSet' element={<PrivateRoute />}>
               <Route path='/newSet' element = {<NewSet/>} /> 
            </Route>
            <Route path='/sets' element={<PrivateRoute />}>
               <Route path='/sets' element = {<Sets/>} /> 
            </Route>
            <Route path='/set/:setId' element={<PrivateRoute />}>
               <Route path='/set/:setId' element = {<ViewSet/>} /> 
            </Route>
            <Route path='/updateSet/:setId' element={<PrivateRoute />}>
               <Route path='/updateSet/:setId' element = {<UpdateSet/>} /> 
            </Route>
          </Routes>
        </div>
       </Router>
       <ToastContainer/>
    </>
  );
}

export default App;
