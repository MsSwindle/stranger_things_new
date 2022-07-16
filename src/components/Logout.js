import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ token, setToken }) => {
    const history =useNavigate();
	const handleLogout = async () => {
		setToken('');
		sessionStorage.removeItem('token');
        history('/HomePage')
	};
	return (
		<div className="Logout">
			<h1>Are you sure you want to log out?</h1>
			<button onClick={handleLogout}>Log out</button>
		</div>
	);
};

export default Logout;
