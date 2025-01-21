import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function MemberDashboard() {
  console.log("Member Dashboard is rendered!"); 
  return (
    <div>
      <h1>Member Dashboard</h1>
      <div>
        <button>
          <Link to="view-bill-notification">View Bill Notification</Link>
        </button>
        <button>
          <Link to="view-bill-receipt">View Bill Receipt</Link>
        </button>
      </div>
      {/* Outlet for rendering child routes */}
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default MemberDashboard;
