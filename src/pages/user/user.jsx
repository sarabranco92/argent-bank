
// UserProfile.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserName } from '../../redux/authThunks';
import Account from '../../components/Account/Account';

const User = () => {

    const token = sessionStorage.getItem('token'); // Ou une autre source selon votre gestion des tokens
    console.log("Retrieved token:", token);

    const tokken = useSelector((state) => state.auth.tokken);
    const userData = useSelector((state) => state.user.userData);
  
    console.log("UserData:", userData);
    console.log("FirstName:", userData?.firstName);

    const [newUserName, setNewUserName] = useState('');
    const dispatch = useDispatch();


    const handleSubmit = () => {
        dispatch(updateUserName({ token, newUserName }))
            .unwrap()
            .then(response => {
                console.log("Successful update:", response);

            })
            .catch(error => {
                console.error("Failed to update username:", error);

            });
    };
    console.log("FirstName:", userData.body?.firstName);

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back, {userData.firstName} {userData.lastName}!</h1>
            </div>
            <div>


                {/* Formulaire pour changer le userName */}
                <input type="text" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} />
                <button onClick={handleSubmit}>Change UserName</button>
            </div>
            {/* Dynamic Account components */}
            {userData.accounts && userData.accounts.map(account => (
                <Account key={account.id} title={account.title} amount={account.amount} description={account.description} />
            ))}
        </main>
    );
};

export default User

