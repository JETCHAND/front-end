import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import FetchAllShipment from './components/shipment/FetchAllShipment';
import FetchAllShipment2 from './components/shipment/FetchAllShipment2';
import FetchAllShipment3 from './components/shipment/FetchAllShipment3';
import FetchShipment from './components/shipment/FetchShipment';
import CreateShipment from './components/shipment/CreateShipment';
import EditShipment from './components/shipment/EditShipment';
import Login from './components/login/Login';
import AdminDashboard from './components/dashboard/Admin Dashboard';
import ManagerDasboard from './components/dashboard/ManagerDashBoard';
import UserDashboard from './components/dashboard/UserDashboard';
import FetchAllUsers from './components/User/FetchAllUsers';
import FetchUser from './components/User/FetchUser';
import EditUser from './components/User/EditUser';
import CreateUser from './components/User/CreateUser';



function App() {
  return (
    <div className="App">
      <Router>
      
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        

        <Route path="/shipment/all" element={<FetchAllShipment />} />
          <Route path="/shipment2/all" element={<FetchAllShipment2 />} />
          <Route path="/shipment3/all" element={<FetchAllShipment3 />} />
          <Route path="/shipment/all/:id" element={<FetchShipment />} />
          <Route path="/shipment2/all/:id" element={<FetchAllShipment2 />} />
          <Route path="/shipment3/all/:id" element={<FetchAllShipment3 />} />
          <Route path="/shipment/save" element={<CreateShipment />} />
          <Route path="/shipment/edit/:id" element={<EditShipment />} />
          <Route path="/user/login" element={<Login/>} />
          <Route path="/admin/dashboard" element={<AdminDashboard/>} />
          <Route path="/manager/dashboard" element={<ManagerDasboard/>} />
          <Route path="/user/dashboard" element={<UserDashboard/>} />
          <Route path="/user/all" element={<FetchAllUsers/>}/>
          <Route path="/user/get/:id" element={<FetchUser/>}/>
          <Route path="/user/edit/:id" element={<EditUser/>} />
          <Route path="/user/save" element={<CreateUser/>} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
