import {BrowserRouter,Routes,Route} from 'react-router-dom'

//pages and components
import Home from './pages/Home'
import DefaultNavbar from './components/DefaultNavbar'
import WorkoutForm from './components/WorkoutForm';

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
           </Routes>
         </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
