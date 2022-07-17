import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const cohortName = '2204-ftb-et-web-pt';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const Msg = ({ token, postId }) => {
	const [content, setContent] = useState('');
	const [message, setMessage] = useState([]);
	const history =useNavigate();
	

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch(`${APIURL}/posts/${postId}/messages`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
			body: JSON.stringify({
				message: {
					content,
				},
			}),
		});
		const result = await response.json();
		setMessage([result.data.message, ...message]);
		setContent('');
		history('/Inbox');
	};

	return (
		<div>
			
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Message"
						value={content}
						onChange={(e) => setContent(e.target.value)}
					></input>
					<button type="submit" className="btnMsg">
						Message{' '}
					</button>
				</form>
		
		</div>
	);
};

export default Msg;
