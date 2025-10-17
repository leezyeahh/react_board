import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../api/localStorage';
import BoardItem from '../components/board/BoardItem';

const BoardList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const storedPosts = getPosts();
        setPosts(storedPosts);
    }, []);

    const postList = posts.map((post) => <BoardItem key={post.id} post={post}/>);

    return (
        <div>
            <h2 className="ptitle">게시판 목록</h2>
            {posts.length > 0 ? (
                <div className="board-wrap">
                    <ul className="board-list">{postList}</ul>
                </div>
            ) : (
                <div className="no-data-box">게시글이 없습니다.</div>
            )}
            <Link to='/boardWrite'>글쓰기</Link>
        </div>
    );
};

export default BoardList;