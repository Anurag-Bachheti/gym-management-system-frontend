import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook to navigate programmatically
import Login from './Login';
// import Signup from './Signup';

import AddMember from '../AdminDashboardPage/AddMember';
import ViewBillNotification from '../MemberDashboardPage/ViewBillNotification';
import ViewBillReceipt from '../MemberDashboardPage/ViewBillReceipt';
import UpdateDeleteMember from '../AdminDashboardPage/UpdateDeleteMember';
import CreateBill from '../AdminDashboardPage/CreateBill';
import FeePackage from '../AdminDashboardPage/FeePackage';
import Notification from '../AdminDashboardPage/Notification';
import ReportExport from '../AdminDashboardPage/ReportExport';
import Support from '../AdminDashboardPage/SupplementStore';
import DietDetails from '../AdminDashboardPage/DietDetails';

const Dashboard = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [activeComponent, setActiveComponent] = useState(null);
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  
    if (selectedRole === 'Admin') {
      navigate('/admin-dashboard');
    } else if (selectedRole === 'Member') {
      navigate('/member-dashboard');
    } else if (selectedRole === 'User') {
      navigate('/user'); // Navigate to the User Dashboard
    }
  };

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    setIsLoggedIn(false); // Reset login state when selecting a new role
    console.log(`Role selected: ${role}`);
  };

  // Step 1: Role Selection
  const renderRoleSelection = () => (
    <div>
      <h3>Select a Role to Continue</h3>
      <div style={styles.roleSelection}>
        <button style={styles.roleSelectionButton} onClick={() => handleRoleSelection('Admin')}>Admin</button>
        <button style={styles.roleSelectionButton} onClick={() => handleRoleSelection('Member')}>Member</button>
        <button style={styles.roleSelectionButton} onClick={() => handleRoleSelection('User')}>User</button>
      </div>
    </div>
  );

  // Step 2: Render Login based on selected role
  const renderLogin = () => (
    <div>
      <h3>{selectedRole} Login</h3>
      <Login onLoginSuccess={handleLoginSuccess} />
      {/* //<Signup /> */}
    </div>
  );

  // Step 3: Show the dashboard based on the selected role after login
  const renderRoleDashboard = () => {
    switch (selectedRole) {
      case 'Admin':
        return (<div>
          <h3>Admin Dashboard</h3>
          <div style={styles.adminContainers}>
            <button onClick={() => setActiveComponent('AddMember')}>Add Member</button>
            <button onClick={() => setActiveComponent('UpdateDeleteMember')}>Update/Delete Member</button>
            <button onClick={() => setActiveComponent('CreateBill')}>Create Bill</button>
            <button onClick={() => setActiveComponent('FeePackage')}>Assign Fee Package</button>
            <button onClick={() => setActiveComponent('Notification')}>Assign Notification</button>
            <button onClick={() => setActiveComponent('ReportExport')}>Report Export</button>
            <button onClick={() => setActiveComponent('Support')}>Support</button>
            <button onClick={() => setActiveComponent('DietDetails')}>Diet Details</button>
          </div>
          <div style={styles.componentContainer}>
            {activeComponent === 'AddMember' && <AddMember />}
            {activeComponent === 'UpdateDeleteMember' && <UpdateDeleteMember />}
            {activeComponent === 'CreateBill' && <CreateBill />}
            {activeComponent === 'FeePackage' && <FeePackage />}
            {activeComponent === 'Notification' && <Notification />}
            {activeComponent === 'ReportExport' && <ReportExport />}
            {activeComponent === 'Support' && <Support />}
            {activeComponent === 'DietDetails' && <DietDetails />}
          </div>
        </div>
        );
        case 'Member':
          return (
            <div>
              <h3>Member Dashboard</h3>
              <div style={styles.memberContainers}>
                <button style={styles.button} onClick={() => setActiveComponent('ViewBillReceipts')}>
                  View Bill Receipts
                </button>
                <button style={styles.button} onClick={() => setActiveComponent('ViewBillNotifications')}>
                  View Bill Notifications
                </button>
              </div>
              <div style={styles.componentContainer}>
                {activeComponent === 'ViewBillReceipts' && <ViewBillReceipt />}
                {activeComponent === 'ViewBillNotifications' && <ViewBillNotification />}
              </div>
            </div>
          );
        case 'User':
          return (
            <div>
              <h3>User Dashboard</h3>
              <div style={styles.userContainers}>
                <button style={styles.button} onClick={() => navigate('/user/view-details')}>
                  View Details
                </button>
                <button style={styles.button} onClick={() => navigate('/user/search-records')}>
                  Search Records
                </button>
              </div>
            </div>
          );
      default:
        return <p>Select a role to continue.</p>;
    }
  };

  return (
    <div style={styles.dashboard}>
    {isLoggedin ? (
      renderRoleDashboard()  // After login, it should navigate automatically based on role
    ) : selectedRole ? (
      renderLogin() // Show Login after selecting role
    ) : (
      renderRoleSelection() // Show role selection if no role is selected
    )}
  </div>
);
};
const styles = {
  dashboard: {
    textAlign: 'center',
  },
  roleSelectionButton: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  roleSelection: {
    marginTop: '20px',
  },
  adminContainers: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    marginTop: '20px',
  },
  memberContainers: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    marginTop: '20px',
  },
  userContainers: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    marginTop: '20px',
  },
};

export default Dashboard;
