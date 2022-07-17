import React, { useState, useEffect } from 'react';


const Search = ({ token, posts, setPostsToDisplay }) => {
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const filteredPosts =
			posts.length &&
			posts.filter((post) => postMatches(post, searchTerm));
		const postsToDisplay = searchTerm.length ? filteredPosts : posts;
		setPostsToDisplay(postsToDisplay);
	}, [searchTerm]);
	function postMatches(post, text) {
		if (post.title.includes(searchTerm)) {
			return true;
		} else {
			return false;
		}
	}

	const handleSubmit = async (e) => {
		setSearchTerm(e.target.value);
	};

	return (
		<div className="SearchContainer">
			<form>
				<input
					type="text"
					placeholder="search"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				></input>
				<button type="submit" className="btnSubmit">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Search;
