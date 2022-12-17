import './App.css';
import { Route,Routes } from 'react-router-dom';
import { AllUser } from './components/AllUser';
import { AddUser } from './components/AddUser';
import { Navbar } from './components/Navbar';
import { EditUser } from './components/EditUser';
import { Login } from './components/Login';
import { Signup } from './components/Signup';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>

      <Route path='/all' element = {<AllUser/>} />
      <Route path='/add' element = {<AddUser/>} />
      <Route path='/edit/:id' element = {<EditUser/>} />
      <Route path='/login' element = {<Login/>} />
      <Route path='/signup' element = {<Signup/>}/>
     </Routes>
    </div>
  );
}

export default App;
