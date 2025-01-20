import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import Dashboard from './pages/Dashboard';
import Header from './pages/Header';
import Login from './pages/Login';
import UsersList from './components/UsersList';

import AddMember from './AdminDashboard/AddMember/AddMember';
import UpdateDeleteMember from './AdminDashboard/AddMember/UpdateDeleteMember';
import CreateBills from './AdminDashboard/CreateBills';
import FeePackage from './AdminDashboard/FeePackage';
import Notification from './AdminDashboard/Notification';
import ReportExport from './AdminDashboard/ReportExport';
import Support from './AdminDashboard/SupplementStore';
import DietDetails from './AdminDashboard/DietDetails';

// const NotFound = () => <h1>404: Page Not Found</h1>;

function App() {
  return (
    <Router>
      
      {/* Header is always visible */}
      <Header />

      {/* Define application routes */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        <Route path="/login" element={<Login />} />
        <Route path="/users-list" element={<UsersList />} />
        {/* <Route path="*" element={<NotFound />} /> */}

        <Route path="/add-member" element={<AddMember />} />
        <Route path="/update-delete-member" element={<UpdateDeleteMember />} />
        <Route path="/create-bills" element={<CreateBills />} />
        <Route path="/assign-fee-package" element={<FeePackage />} />
        <Route path="/assign-notification" element={<Notification />} />
        <Route path="/report-export" element={<ReportExport />} />
        <Route path="/supplement-store" element={<Support />} />
        <Route path="/diet-details" element={<DietDetails />} />

      </Routes>
    </Router>
  );
}

export default App;
