
import './App.css';
import Home from './Home.js';
import Contact from './componenets/Contact.js'
import Shoppingcart from './componenets/Shoppingcart.js'
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   
    <div className="App">
      <Router>
        <ToastContainer />

             <Routes>

                <Route exact path='/' element={<Home />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route exact path='/shoppingcart' element={<Shoppingcart />} />

              
                
             </Routes>
      
      </Router>
  
    </div>
   
  );
}

export default App;
