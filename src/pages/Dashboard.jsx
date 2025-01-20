import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook to navigate programmatically
import Login from './Login';
import Signup from './Signup';

import AddMember from '../AdminDashboard/AddMember/AddMember';
import UpdateDeleteMember from '../AdminDashboard/AddMember/UpdateDeleteMember';
import CreateBills from '../AdminDashboard/CreateBills';
import FeePackage from '../AdminDashboard/FeePackage';
import Notification from '../AdminDashboard/Notification';
import ReportExport from '../AdminDashboard/ReportExport';
import Support from '../AdminDashboard/SupplementStore';
import DietDetails from '../AdminDashboard/DietDetails';

const Dashboard = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [activeComponent, setActiveComponent] = useState(null);
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    navigate(`/${selectedRole.toLowerCase()}-dashboard`); // Navigate based on the selected role
  };

  // Step 1: Role Selection
  const renderRoleSelection = () => (
    <div>
      <h3>Select a Role to Continue</h3>
      <div style={styles.roleSelection}>
        <button style={styles.roleSelectionButton} onClick={() => setSelectedRole('Admin')}>
          Admin
        </button>
        <button style={styles.roleSelectionButton} onClick={() => setSelectedRole('Member')}>
          Member
        </button>
        <button style={styles.roleSelectionButton} onClick={() => setSelectedRole('User')}>
          User
        </button>
      </div>
    </div>
  );

  // Step 2: Render Login/Signup based on selected role
  const renderLoginSignup = () => (
    <div>
      <h3>{selectedRole} Login/Signup</h3>
      <Login onLoginSuccess={handleLoginSuccess} />
      <Signup />
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
            <button onClick={() => setActiveComponent('CreateBills')}>Create Bills</button>
            <button onClick={() => setActiveComponent('FeePackage')}>Assign Fee Package</button>
            <button onClick={() => setActiveComponent('Notification')}>Assign Notification</button>
            <button onClick={() => setActiveComponent('ReportExport')}>Report Export</button>
            <button onClick={() => setActiveComponent('Support')}>Support</button>
            <button onClick={() => setActiveComponent('DietDetails')}>Diet Details</button>
          </div>
          <div style={styles.componentContainer}>
            {activeComponent === 'AddMember' && <AddMember />}
            {activeComponent === 'UpdateDeleteMember' && <UpdateDeleteMember />}
            {activeComponent === 'CreateBills' && <CreateBills />}
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
              <div>View Bill Receipts</div>
              <div>View Bill Notification</div>
              <div>Schedule Appointments</div>
            </div>
          </div>
        );
      case 'User':
        return (
          <div>
            <h3>User Dashboard</h3>
            <div style={styles.userContainers}>
              <div>View Details</div>
              <div>Search Records</div>
              <div>Request Assistance</div>
            </div>
          </div>
        );
      default:
        return <p>Select a role to continue.</p>;
    }
  };

  return (
    <div style={styles.dashboard}>
      {!isLoggedin ? (
        selectedRole ? (
          renderLoginSignup() // Show Login/Signup after selecting role
        ) : (
          renderRoleSelection() // Show role selection if no role is selected
        )
      ) : (
        renderRoleDashboard() // Show the role dashboard after login
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
