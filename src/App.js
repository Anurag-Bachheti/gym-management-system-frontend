import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Header from './pages/Header';
import Login from './pages/Login';
import UsersList from './components/UsersList';

import AdminDashboard from "./pages/AdminDashboard";
import MemberDashboard from './pages/MemberDashboard';

import AddMember from './AdminDashboard/AddMember/AddMember';
import UpdateDeleteMember from './AdminDashboard/UpdateDeleteMember';
import CreateBills from './AdminDashboard/CreateBills';
import FeePackage from './AdminDashboard/FeePackage';
import Notification from './AdminDashboard/Notification';
import ReportExport from './AdminDashboard/ReportExport';
import Support from './AdminDashboard/SupplementStore';
import DietDetails from './AdminDashboard/DietDetails';
import ViewBillNotification from './MemberDashboard/ViewBillNotification';
import ViewBillReceipt from './MemberDashboard/ViewBillReceipt';


function App() {
  return (
    <Router>
      {/* Header is always visible */}
      <Header />
      {/* Define application routes */}
      <Routes>
        {/* Default routes */}
        <Route path="/" element={<Dashboard />} />

        {/* Admin Dashoard routes */}
        <Route path="/admin-dashboard" element={<AdminDashboard />}/>
        <Route path="/add-member" element={<AddMember />} />
        <Route path="/update-delete-member" element={<UpdateDeleteMember />} />
        <Route path="/create-bills" element={<CreateBills />} />
        <Route path="/assign-fee-package" element={<FeePackage />} />
        <Route path="/assign-notification" element={<Notification />} />
        <Route path="/report-export" element={<ReportExport />} />
        <Route path="/supplement-store" element={<Support />} />
        <Route path="/diet-details" element={<DietDetails />} />

        {/* MemberDashboard routes */}
        <Route path="/member-dashboard" element={<MemberDashboard />}>
          <Route path="view-bill-notification" element={<ViewBillNotification />} />
          <Route path="view-bill-receipt" element={<ViewBillReceipt />} />
        </Route>
        
        {/* Other routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/users-list" element={<UsersList />} />
      </Routes>
    </Router>
  );
}

export default App;
