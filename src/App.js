import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage  from './components/HomePage';
import UserPage  from './components/UserPage';
import Login  from './components/Login';
import Register  from './components/Register';

export const cohortName = '2204-ftb-et-web-pt';
export const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

function App() {
	const [posts, setPosts] = useState([]);
	const [postId, setPostId] = useState(null);
	const [token, setToken] = useState();

	const [username, setUserName] = useState();
	const [password, setPassword] = useState();

	// if (!token) {
	// 	console.log("Im hitting else if");
	// 	return <Login setToken={setToken} />;
	// }


	return (
		<Router>
			<div className="App">
				<header className="App-header">
                <div id="navbar">
						<Link to="/Register">Register</Link>
						<Link to="/HomePage">Homepage</Link>
						<Link to="/Login">Login</Link>
					</div>
					<p>This will be the Stranger things page</p>
					<Routes>
                        <Route path="/" element={<Login/>}></Route> 
						<Route path="/HomePage" element={<HomePage />}></Route> 
						<Route path="/UserPage" element={<UserPage />}></Route> 
						<Route path="/Login" element={
                            <Login
                                setToken={setToken}
                                setUserName={setUserName}
                                username={username}
                                password={password}
                                setPassword={setPassword}/>}>
                        </Route>
						<Route
							path="/Register"
							element={
								<Register
									setToken={setToken}
									setUserName={setUserName}
									username={username}
									password={password}
									setPassword={setPassword}
								/>
							}
						></Route>
					</Routes>
				</header>
			</div>
		</Router>
	);
}

export default App;
