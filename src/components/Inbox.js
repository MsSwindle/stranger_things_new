import React, { useEffect, useState } from 'react';


const cohortName = '2204-ftb-et-web-pt';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const Inbox = ({token, posts, username}) => {
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
		(<div key={message.post._id}>
				<div id="sender">
					Sender: {message.fromUser.username}
				</div> 
			<div id='post'>Title of Post you Messaged:{message.post.title}</div>
			<div id='messageContent'>Message:{message.content}</div>
			</div>

		)  
		  
	)
		}
		</div>
	)	
}

export default Inbox;