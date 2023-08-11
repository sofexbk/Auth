import {BrowserRouter,Routes,Route} from 'react-router-dom'

//pages and components
import Home from './pages/Home'
import DefaultNavbar from './components/DefaultNavbar'
import WorkoutForm from './components/WorkoutForm';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <DefaultNavbar/>
         <div className='pages'>
           <Routes>
              <Route 
              path="/"
              element={<Home />} 
              />
              <Route 
              path="/work"
              element={<WorkoutForm />} 
              />
              <Route 
              path="/signup"
              element={<Signup />} 
              />
              <Route 
              path="/login"
              element={<Login/>} 
              />
           </Routes>
         </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
