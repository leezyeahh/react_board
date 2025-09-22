import React, { useState, useEffect } from 'react';
import { getPosts } from '../api/localStorage';
import PostCard from '../components/post/PostCard';

const BoardList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const storedPosts = getPosts();
        setPosts(storedPosts);
    }, []);

    return (
        <div>
            <h1>게시글 목록</h1>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))
            ) : (
                <p>게시글이 없습니다.</p>
            )}
        </div>
    );
};

export default BoardList;