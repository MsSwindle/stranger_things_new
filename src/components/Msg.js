import React, {useState} from 'react';

const cohortName = '2204-ftb-et-web-pt';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const Msg = ({token, postId}) => {
    const [content, setContent] = useState('');
    const [message, setMessage] = useState([]);

    const handleSubmit = async (ev) => {
		ev.preventDefault();
		console.log(token)
		const response = await fetch(`${APIURL}/posts/${postId}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                message: {
                    content,
                }
            })
        })
            const result = await response.json();
		    console.log('result', result);
            setMessage ([result.data.message,...message]);
            setContent('')
            
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <button
                type ="submit"
                className='btnMsg'>Message </button>
				<input
					type="text"
					placeholder="Message"
					value={content}
					onChange={(ev) => setContent(ev.target.value)}
				></input>
            </form>
        </div>
    )
}

export default Msg;