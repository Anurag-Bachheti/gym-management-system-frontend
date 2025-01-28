import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Header from './pages/Header';
import Login from './pages/Login';
import UsersList from './components/UsersList';

import AdminDashboard from "./pages/AdminDashboard";
import MemberDashboard from './pages/MemberDashboard';
import UserDashboard from './pages/UserDashboard';

import AddMember from './AdminDashboardPage/AddMember';
import UpdateDeleteMember from './AdminDashboardPage/UpdateDeleteMember';
import CreateBill from './AdminDashboardPage/CreateBill';
import FeePackage from './AdminDashboardPage/FeePackage';
import Notification from './AdminDashboardPage/Notification';
import ReportExport from './AdminDashboardPage/ReportExport';
import Support from './AdminDashboardPage/SupplementStore';
import DietDetails from './AdminDashboardPage/DietDetails';
import ViewBillNotification from './MemberDashboardPage/ViewBillNotification';
import ViewBillReceipt from './MemberDashboardPage/ViewBillReceipt';
import SearchRecord from './UserDashboardPage/SearchRecord';
import ViewDetail from './UserDashboardPage/ViewDetail';



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
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />}/>
        <Route path="/add-member" element={<AddMember />} />
        <Route path="/update-delete-member" element={<UpdateDeleteMember />} />
        <Route path="/admin/create-bill" element={<CreateBill />} />
        <Route path="/assign-fee-package" element={<FeePackage />} />
        <Route path="/assign-notification" element={<Notification />} />
        <Route path="/report-export" element={<ReportExport />} />
        <Route path="/supplement-store" element={<Support />} />
        <Route path="/diet-details" element={<DietDetails />} />

        {/* MemberDashboard routes */}
        <Route path="/member-dashboard" element={<MemberDashboard />}>
        <Route index element={<p>Select an option from the dashboard</p>} />
        <Route path="view/billnotification" element={<ViewBillNotification />} />
        <Route path="view/billreceipt" element={<ViewBillReceipt />} />
        </Route>
        
        {/* Other routes */}
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/user/search-records" element={<SearchRecord />} />
        <Route path="/user/view-details" element={<ViewDetail />} />

        <Route path="/users-list" element={<UsersList />} />
      </Routes>
    </Router>
  );
}

export default App;
