import React from 'react';

const cohortName = '2204-ftb-et-web-pt';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const Inbox = () => {

    // const handleSubmit = async (ev) => {
	// 	ev.preventDefault();
	// 	console.log(token)
	// 	const response = await fetch(`${APIURL}/posts/${post_Id}`, {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			'Authorization': `Bearer ${token}`,
	// 		},
	// 		body: JSON.stringify({
	// 			post: {
	// 				title,
	// 				description,
	// 				price,
	// 				location,
	// 				willDeliver,
	// 			},
	// 		}),
	// 	});
	// 	const result = await response.json();
	// 	console.log('result', result);
	// 	setPosts([result.data.post, ...posts]);
	// 	setTitle('');
	// 	setDescription('');
	// 	setLocation('');
	// 	setPrice('');
	// };

    return (

        <h1> Inbox </h1>
    )
}

export default Inbox;