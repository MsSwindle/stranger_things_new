import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import UserPage from './components/UserPage';
import Login from './components/Login';
import Register from './components/Register';
import Inbox from './components/Inbox';
import Logout from './components/Logout';

export const cohortName = '2204-ftb-et-web-pt';
export const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

function App() {
	const [token, setToken] = useState();

	const [username, setUserName] = useState();
	const [password, setPassword] = useState();

	useEffect(() => {
		onLoad();
	}, []);

	async function onLoad() {
		try {
			const storedToken = JSON.parse(sessionStorage.getItem('token'));
			if (storedToken) {
				setToken(storedToken);
			}
		} catch (e) {
			if (e !== 'No current user') {
				alert(e);
			}
		}
	}

	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<div id="navbar">
						<nav>
							<Link to="/HomePage">Homepage</Link>
							{!token ? (
								<>
									<Link to="/Register">Register</Link>
									<Link to="/Login"> Login</Link>
								</>
							) : (
								<>
									<Link to="/UserPage">Profile</Link>
									<Link to="/Inbox">Inbox</Link>
									<Link to="/Logout">Logout</Link>
								</>
							) : (
								<p>Please log in</p>)
              }
						</nav>
					</div>
					<Routes>
						<Route path="/" element={<HomePage />}></Route>
						<Route
							path="/HomePage"
							element={<HomePage token={token} />}
						></Route>
						<Route
							path="/Login"
							element={
								<Login
									token={token}
									setToken={setToken}
									setUserName={setUserName}
									username={username}
									password={password}
									setPassword={setPassword}
								/>
							}
						></Route>
						<Route
							path="/Register"
							element={
								<Register
									token={token}
									setToken={setToken}
									setUserName={setUserName}
									username={username}
									password={password}
									setPassword={setPassword}
								/>
							}
						></Route>
						<Route
							path="/UserPage"
							element={
								<UserPage token={token} username={username} />
							}
						></Route>
						<Route
							path="/Inbox"
							element={<Inbox token={token} />}
						></Route>
						<Route
							path="/Logout"
							element={
								<Logout token={token} setToken={setToken} />
							}
						></Route>
					</Routes>
				</header>
			</div>
		</Router>
	);
}

export default App;
