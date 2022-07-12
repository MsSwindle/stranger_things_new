// import React, {useState} from 'react';
// const cohortName = '2204-ftb-et-web-pt';
// const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;


const UserPage = () => {


    // const userMessage = ({postId, token}) => {
    
    //     return fetch(`${APIURL}/posts/${postId}/messages`, {
    //         method: "POST",
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'Authorization': `Bearer ${token}`
    //         },
    //         body: JSON.stringify({
    //           message: {
    //             content
    //           }
    //         })
    //       }).then(response => response.json())
    //         .then(result => {
    //           console.log(result);
    //           return result;
    //         })
    //         .catch(console.error);
    //     }   

	return (
        <div>
            <h2>Profile</h2>;
            {/* {messages.map((message) => (
					<div key={post._id}>
						<h3>{post.title}</h3>
						<div>{post.description}</div>
                        <div>{post.location}</div>
                        <div>{post.price}</div>
                        <div>{post.willDeliver}</div>
            } */}
        </div>
    )
};

export default UserPage;
