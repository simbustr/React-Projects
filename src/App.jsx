import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import DashboardPage from "./pages/Dashboard";
import UsersPage from "./pages/Users";
import Servicespage from './pages/Services'
import TodoPage from './pages/TodoList'
import EmployeePage from './pages/Employee'
import UserProfilePage from './pages/component/UserProfile/index'
import EmployeeTablePage from './pages/EmployeeTable'



function App() {
  return (
    <>
      
      <BrowserRouter>
      <Layout />
        <Routes>
         
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/employee" element={<EmployeePage />} />
          <Route path="/employeetable" element={<EmployeeTablePage />} />
          <Route path="/dasboard" element={<DashboardPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/services" element={<Servicespage />} />
          <Route path="/userprofile" element={<UserProfilePage />} />
          
       
        </Routes>
      </BrowserRouter>
   
    </>
  );
}

export default App;
