
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import NameAbout from './components/NameAbout';
import NameContact from './components/NameContact';
import Error from './components/Error';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Insta from './components/Insta';
import Mail from './components/Mail';
import UserDetails from './components/UserDetails';
import Footer from './components/Footer';
function App() {
    return (
      <div className='Apps'>
      <Router>
      <div >
    
   <Header/> 
   
   <Routes>
   <Route path='/'>
    
        <Route index element={<Home/>}/> 
          <Route path='/app' element={<Home/>}/>
         <Route path=':userId' element ={<UserDetails/>}/>
         
         </Route>
           
            {/* Nestle Route */}
         
          <Route path="/contact"element={<NameContact/>}>   
            <Route path='insta' element={<Insta/>}/>
            <Route path="mail" element={<Mail/>}/>
            <Route index element={<Mail/>}/>
          </Route>
          
          <Route path="/about" element={<NameAbout/>}>
      
          </Route>
          <Route path="*" element={<Error/>}>
      
      </Route>
        </Routes>
    </div>
    <div>
   <Footer/>
   </div></Router>
   </div>
  );
}

export default App;
