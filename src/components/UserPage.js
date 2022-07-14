import React, {useState, useEffect} from 'react';
import Create from './Create';
import Update from './Update';

const cohortName = '2204-ftb-et-web-pt';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const UserPage = ({token}) => {

    const [posts, setPosts] = useState([]);
	const [postId, setPostId] = useState(null);
	

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

    const handleDelete = async (postIdToDelete) => {
		console.log('postIdToDelete', postIdToDelete);
		const response = await fetch(`${APIURL}/posts/${postIdToDelete}`, {
			method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
		});
		const result = await response.json();
		if (result) {
			const newPosts = posts.filter(
				(post) => post._id !== postIdToDelete
			);
			setPosts(newPosts);
		}
	};
	return (
        <div>
             <h2>Profile</h2>
    <h1 className="Post"> Posts </h1>
				{postId ? (
					<Update
						posts={posts}
						setPosts={setPosts}
						postId={postId}
						setPostId={setPostId}
					/>
				) : (
					<Create posts={posts} setPosts={setPosts} token={token} />
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
							className="btnEdit"
							onClick={() => setPostId(post._id)}
						>
							Edit
						</button>
						<button
							type="button"
							className="btnDelete"
							onClick={() => handleDelete(post._id)}
						>
							Delete
						</button>
					</div>
				))}

        </div>
    )
};


export default UserPage;
