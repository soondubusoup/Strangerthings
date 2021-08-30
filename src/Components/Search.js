import React, { useState } from 'react';
import SinglePost from './SinglePost';

const Search = ({fetchPosts, posts, setPosts}) => {

    const [query, setQuery] = useState('')
    const [isTitle, setIsTitle] = useState(true);
    
    const handleFilter = async () => {
        let filteredPosts
        isTitle 
            ? filteredPosts = posts.filter(post => post.title.toLowerCase().includes( query.toLowerCase() ))
            : filteredPosts = posts.filter(post => post.description.toLowerCase().includes( query.toLowerCase() ))
        setPosts(filteredPosts);
        query === '' && await fetchPosts();
    }

    return <form className='search-form' onChange={handleFilter}>
        <input name='search' type='text' placeholder='FILTER POSTS' className='search-input' value={query} onChange={(e)=> setQuery(e.target.value)} />       
        <button type='submit'className='search-button' >reset</button>
        <div></div>
    </form>
}

export default Search;