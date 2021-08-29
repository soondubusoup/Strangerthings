import React, { useEffect, useState } = from 'react';

const Search = ({posts, setPosts}) => {
    const[searchTerm, SetSearchTerm] = useState('')

    const postMatches = (post, text) => {
        let check = post.includes(text);
        return check;
    }

    const filteredPosts = posts.filter(post => postMatches(post.title.toLowerCase(), searchTerm)

    const postsToDisplay = searchTerm.length ? filteredPosts : posts;

    return <>
        <form className="searchform" onSubmit={ (event) {
            event.preventDefault();
            postsToDisplay.map(postToDisplay => <div key={postToDisplay._id} }></form>
        }
}