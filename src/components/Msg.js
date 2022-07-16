import React, {useState} from 'react';

const cohortName = '2204-ftb-et-web-pt';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const Msg = ({token, posts, postId}) => {
    const [content, setContent] = useState('');
    const [message, setMessage] = useState([]);

    const handleSubmit = async (ev) => {
		ev.preventDefault();
		console.log(token)
		const response = await fetch(`${APIURL}/posts/${postId}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: {
                    content,
                }
            })
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setMessage ([result.data.message,...message]);
            })
            .catch(console.error);
    }

    return (
        <div>
            <button
                type ="button"
                className='btnMsg'>Message </button>
            <form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Message"
					value={message}
					onChange={(ev) => setMessage(ev.target.value)}
				></input>
            </form>
        </div>
    )
}

export default Msg;