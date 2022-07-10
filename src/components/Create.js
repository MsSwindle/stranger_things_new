import React, { useState } from 'react';

const cohortName = '2204-ftb-et-web-pt';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const Create = ({ posts, setPosts }) => {
	const [title, setTitle] = useState([]);
	const [description, setDescription] = useState([]);
	const [price, setPrice] = useState('');
	const [location, setLocation] = useState ('');
	const [willDeliver, setWillDeliver] = useState(false);

	const handleSubmit = async (ev) => {
		ev.preventDefault();
		const response = await fetch(`${APIURL}/posts`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer `${token}`',
			},
			body: JSON.stringify({
				post: {
					title,
					description,
					price,
					location,
					willDeliver,
				},
			}),
		});
		const result = await response.json();
		console.log('result', result);
		setPosts([result, ...posts]);
		setTitle('');
		setDescription('');
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
				<input
					type="text"
					placeholder="willDeliver"
					value={title}
					onChange={(ev) => setWillDeliver(ev.target.value)}
				></input>
				<button type="submit" className="btn btn-outline-primary">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Create;
