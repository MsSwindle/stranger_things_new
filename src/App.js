import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage  from './components/HomePage';
import UserPage  from './components/UserPage';
import Login  from './components/Login';
import Register  from './components/Register';
import Inbox from './components/Inbox'



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
         const storedToken = JSON.parse(sessionStorage.getItem('token'))
         console.log(storedToken)
          if(storedToken){
            setToken(storedToken)
          }
        } catch (e) {
          if (e !== "No current user") {
            alert(e);
          }
        }
      
      }

      async function handleLogout() {
        setToken('');
        sessionStorage.removeItem("token")
      }

	return (
		<Router>
			<div className="App">
				<header className="App-header">
                <div id="navbar">
                    <nav>  
                    <Link to="/Register">Register</Link>
					          <Link to="/HomePage">Homepage</Link>
					          <Link to ="/Login"> Login</Link>
                    <Link to ="/UserPage">Profile</Link>
                    <Link to ="/Inbox">Inbox</Link>
                    </nav>
					</div>
					<p>This will be the Stranger things page</p>
					<Routes>
                        <Route path="/" element={<HomePage/>}></Route> 
						<Route path="/HomePage" element={<HomePage token={token}/>}></Route> 
						<Route path="/UserPage" element={<UserPage token={token}/>}></Route> 
						<Route path="/Login" element={
                            <Login
                            token={token}
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
                                token={token}
                                setToken={setToken}
                                setUserName={setUserName}
                                username={username}
                                password={password}
                                setPassword={setPassword}
								/>
							}
                            ></Route>
            <Route path="/Inbox" element={<Inbox/>}></Route> 
					</Routes>
				</header>
			</div>
		</Router>
    )
}

export default App;
