import axios from 'axios';
import './App.css';
import { UserContextProvider,  } from './ContextAPI/UserContex';
import Routes from './Routes';

function App() {
  axios.defaults.baseURL = "http://localhost:5000";
  axios.defaults.withCredentials = true ;
  return(
  <UserContextProvider>
    <Routes/>
  </UserContextProvider>
  )
}

export default App;
