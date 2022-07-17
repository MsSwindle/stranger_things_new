import React, {useState} from 'react';

// const cohortName = '2204-ftb-et-web-pt';
// const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const Search = ({token, posts, setPosts}) => {

    const [searchTerm, setSearchTerm] = useState('');
    // const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
    // const postsToDisplay = searchTerm.length ? filteredPosts : posts;

        // function postMatches(post, text) {
        //     if(post.includes(searchTerm)){
        //     return post
        //     }
        //     else{
        //         return ("No post matching " + searchTerm)
        //     }
        // }

    // const handleSubmit = async (e) => {
    //     setSearchTerm(e.target.value);
    // }

    return (
        <div className='SearchContainer'>
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
    )
};

export default Search;