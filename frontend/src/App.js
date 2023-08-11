import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';

//pages and components
import Home from './pages/Home'
import DefaultNavbar from './components/DefaultNavbar'
import WorkoutForm from './components/WorkoutForm';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  const {user}=useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
      <DefaultNavbar/>
         <div className='pages'>
           <Routes>
              <Route 
              path="/"
              element={user ? <Home/>:<Navigate to="/login"/>} 
              />
              <Route 
              path="/work"
              element={<WorkoutForm />} 
              />
              <Route 
              path="/signup"
              element={!user ? <Signup/>: <Navigate to="/"/> } 
              />
              <Route 
              path="/login"
              element={ !user ? <Login/>:<Navigate to="/"/>} 
              />
           </Routes>
         </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
