import React from 'react';
import Account from '../../components/Account/Account';

const UserProfile = () => {
    // Add logic for user details
    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            {/* Example usage, replace with dynamic content */}
            <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
            {/* Add more AccountSummary components as needed */}
        </main>
    );
};

export default UserProfile;
