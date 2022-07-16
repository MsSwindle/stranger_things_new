import react from 'react';

const cohortName = '2204-ftb-et-web-pt';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const Search = (posts, setPosts) => {

const [searchTerm, setSearchTerm] = useState('');

function postMatches(post, text) posts.filter(
  post => {
    return(
        post.text.includes(searchTerm) 
    )
  }
)
}


const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
const postsToDisplay = searchTerm.length ? filteredPosts : posts;

// then, in our jsx below... map over postsToDisplay instead of posts

const handleSubmit = e => {
    setSearchTerm(e.target.value);
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="search"
					value={searchTerm}
					onChange={handleSubmit}
				></input>
				<button type="submit" className="btn btn-outline-primary">
					Submit
				</button>
			</form>
            {postsToDisplay.map((post) => (
            <div key={post._id}>
            <h3>{post.title}</h3>
            <div>{post.description}</div>
            <div>{post.location}</div>
            <div>{post.price}</div>
            <div>{post.willDeliver}</div>
            ))}
        </div>
    )
}

export default Search;