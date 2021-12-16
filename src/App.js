import React from 'react'; 
import './App.css';
import HomePage from './containers/index';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import CustomerAccessPage from './components/customerAccessPage';


function App() {
  return (
    <div className="App">
<Router>
  <Routes>
    <Route path="/" exact element={<HomePage/>} />
    <Route path="/customer/access/:action" exact element={<CustomerAccessPage/>} />
  </Routes>  
</Router>
    </div>
  );
}

export default App;
