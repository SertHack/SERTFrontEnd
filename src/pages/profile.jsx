import React from 'react';
import ReactDOM from 'react-dom/client';

import Navbar from "../components/navbar";

function Profile() {
    return (
    <div id="profile">
        <Navbar></Navbar>
        <p>Profile Page</p>
    </div>
    );
}

export default Profile;