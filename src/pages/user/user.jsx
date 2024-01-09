// UserProfile.js
import React from 'react';
import { useSelector } from 'react-redux';
import Account from '../../components/Account/Account';

const User = () => {
    const userData = useSelector((state) => state.user.userData);

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{userData.username}!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            {/* Dynamic Account components */}
            {userData.accounts && userData.accounts.map(account => (
                <Account key={account.id} title={account.title} amount={account.amount} description={account.description} />
            ))}
        </main>
    );
};

export default User

