import logo from './logo.svg';


import { BrowserRouter as Router ,Route , Routes } from "react-router-dom";
import Signup from './components/Signup';
import Nav from './components/Nav'
import Create from './components/Create'
import Profil from './components/Profil'
import Map from './components/Mappp'
function App() {
  return (
    <>
    <Router>
      <Routes>
    <Route exact path="/" element={<><Nav /><Map /></>} />
    <Route path="/signup" element={<><Nav /> <Signup /> </>}/> 
    <Route path="/create" element={<><Nav /> <Create /> </>}/> 
    <Route path="/profil" element={<><Nav /> <Profil /> </>}/> 
    
    </Routes>
    </Router> 
    </>
  );
}

export default App;
