import Login from './pages/Login';
import Signup from './pages/Signup';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element = {<Login />} />
        <Route path='/signup' element = {<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;