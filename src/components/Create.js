import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cohortName = '2204-ftb-et-web-pt';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;


const Create = ({ token, posts, setPosts }) => {
	const [title, setTitle] = useState([]);
	const [description, setDescription] = useState([]);
	const [price, setPrice] = useState('');
	const [location, setLocation] = useState ('');
	const history =useNavigate();
	

	const handleSubmit = async (ev) => {
		ev.preventDefault();
		console.log(token)
		const response = await fetch(`${APIURL}/posts`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
			body: JSON.stringify({
				post: {
					title,
					description,
					price,
					location
				},
			}),
		});
		const result = await response.json();
		console.log('result', result);
		setPosts([result.data.post, ...posts]);
		history('/UserPage')
		setTitle('');
		setDescription('');
		setLocation('');
		setPrice('');
	};

	return (
		<div>
			<h3>Create a Post</h3>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="title"
					value={title}
					onChange={(ev) => setTitle(ev.target.value)}
				></input>
				<input
					type="text"
					placeholder="description"
					value={description}
					onChange={(ev) => setDescription(ev.target.value)}
				></input>
				<input
					type="text"
					placeholder="Price"
					value={price}
					onChange={(ev) => setPrice(ev.target.value)}
				></input>
				<input
					type="text"
					placeholder="location"
					value={location}
					onChange={(ev) => setLocation(ev.target.value)}
				></input>
				<button type="submit" className="btnPost">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Create;
