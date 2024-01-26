import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserName } from '../../redux/authThunks';
import Account from '../../components/Account/Account';
import "./_profile.scss";
import "../../assets/_main.scss";
import AccountData from "../../data/Account.json";

const User = () => {
// Récupération du token de session
    const token = sessionStorage.getItem('token');
    // Initialisation de dispatch pour envoyer des actions à Redux
    const dispatch = useDispatch();
    // Récupération des données utilisateur depuis le store Redux
    const userData = useSelector((state) => state.user.userData);

 // Déclaration des états locaux
 const [display, setDisplay] = useState(true); // Contrôle de l'affichage du formulaire
 const [newUserName, setNewUserName] = useState(''); // Nouveau nom d'utilisateur
 const [firstName, setFirstName] = useState(''); // Prénom
 const [lastName, setLastName] = useState(''); // Nom
 const [isUpdating, setIsUpdating] = useState(false); // Indicateur de mise à jour


     // Mise à jour des états locaux lorsque les données utilisateur changent
    useEffect(() => {
        if (userData.userName) {
            setNewUserName(userData.userName);
            setFirstName(userData.firstName);
            setLastName(userData.lastName);
        }
    }, [userData.userName, userData.firstName, userData.lastName]);

        // Gestionnaire de soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsUpdating(true); 
        try {
            // Mise à jour du nom d'utilisateur via le thunk updateUserName
            await dispatch(updateUserName({ token, newUserName, firstName, lastName })).unwrap();
            setDisplay(true); // Retour à l'affichage initial
        } catch (error) {
            console.error("Failed to update username:", error);
        } finally {
            setIsUpdating(false); // Indiquer que la mise à jour est terminée
        }
    };

    return (
        <main className="main bg-dark">
            <div className="header">
                {display ? (
                    <div>
                        <h1>Welcome back<br /> {userData.firstName} {userData.lastName}!</h1>
                        <button className="edit-button" onClick={() => setDisplay(!display)}>Edit Name</button>
                    </div>
                ) : (
                    <div>
                        <h2>Edit User Info</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="edit-profile">
                                <label htmlFor="username">User name:</label>
                                <input
                                    type="text"
                                    id="username"
                                    value={newUserName}
                                    onChange={(e) => setNewUserName(e.target.value)}
                                    disabled={isUpdating}
                                />
                            </div>
                            <div className="edit-profile">
                                <label htmlFor="firstname">First Name:</label>
                                <input
                                    type="text"
                                    id="firstname"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    disabled={true}
                                />
                            </div>
                            <div className="edit-profile">
                                <label htmlFor="lastname">Last Name:</label>
                                <input
                                    type="text"
                                    id="lastname"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    disabled={true}
                                />
                            </div>

                            <div className="buttons">
                                <button type="submit" className="edit-username-button" disabled={isUpdating}>Save</button>
                                <button type="button" className="edit-username-button" onClick={() => setDisplay(!display)} disabled={isUpdating}>Cancel</button>
                            </div>

                        </form>
                        {isUpdating && <p>Updating...</p>}
                    </div>
                )}
            </div>

            {AccountData.map((data) => (
                <Account
                    key={data.id}
                    title={data.title}
                    amount={data.amount}
                    description={data.description}
                />
            ))}
        </main>
    );
};

export default User;
