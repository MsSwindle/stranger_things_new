import React, { useEffect, useState } from 'react';


const cohortName = '2204-ftb-et-web-pt';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const Inbox = ({token, posts}) => {
	const [allMessage, setAllMessage] = useState([]);

	useEffect(() => {
		const fetchMsg = async () => {
			console.log(token)
			const response = await fetch(`${APIURL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
            },
		});
		const result = await response.json();
		console.log(result);
		setAllMessage(result.data.messages);
		}; 
		fetchMsg();
		}, 
		[token]);


    return (

		<div className="inbox">
        <h1> Inbox </h1>
		{allMessage.map((message) =>
		(<div key={message._id}>
			<h2>{message.fromUser.username}</h2>
			<h3>{message.content}</h3>
			</div>

		)  
		  
	)
		}
		</div>
	)	
}

export default Inbox;