import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Create  from './components/Create';
import HomePage  from './components/HomePage';
import Update  from './components/Update';
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

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch(`${APIURL}/posts`);
			const result = await response.json();
			setPosts(result.data.posts);
		};
		fetchPosts();
	}, []);


	// if (!token) {
	// 	console.log("Im hitting else if");
	// 	return <Login setToken={setToken} />;
	// }

	const handleDelete = async (postIdToDelete) => {
		console.log('postIdToDelete', postIdToDelete);
		const response = await fetch(`${APIURL}/posts/${postIdToDelete}`, {
			method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
		});
		const result = await response.json();
		console.log('result', result);
		if (result) {
			const newPosts = posts.filter(
				(post) => post._id !== postIdToDelete
			);
			setPosts(newPosts);
		}
	};

	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<p>This will be the Stranger things page</p>
					<Routes>
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
					<div id="navbar">
						<Link to="/Register">Register</Link>
						<Link to="/HomePage">Homepage</Link>
						<Link to="/Login">Login</Link>
					</div>
				</header>
				<h1 className="Post"> Posts </h1>
				{postId ? (
					<Update
						posts={posts}
						setPosts={setPosts}
						postId={postId}
						setPostId={setPostId}
					/>
				) : (
					<Create posts={posts} setPosts={setPosts} />
				)}
				{posts.map((post) => (
					<div key={post._id}>
						<h3>{post.title}</h3>
						<div>{post.description}</div>
                        <div>{post.location}</div>
                        <div>{post.price}</div>
                        <div>{post.willDeliver}</div>
						<button
							type="button"
							className="btn btn-outline-primary"
							onClick={() => setPostId(post._id)}
						>
							Edit
						</button>
						<button
							type="button"
							className="btn btn-outline-danger"
							onClick={() => handleDelete(post._id)}
						>
							Delete
						</button>
					</div>
				))}
			</div>
		</Router>
	);
}

export default App;
