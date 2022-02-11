
import './App.css';
import Login from "./pages/Login";
import   { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom' ;
import Register from "./pages/Register"
import Analytics from "./pages/analytics"

const App = () => {
  return (
     <Router>
         <Routes>
             <Route element={<Register/>} path=""/>
             <Route element={<Login/>} path="/login"/>
             <Route element={<Analytics/>} path="/analytics"/>
         </Routes>
     </Router>
  );
}

export default App;
