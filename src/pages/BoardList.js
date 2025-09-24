import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getPosts } from '../api/localStorage';
import BoardItem from '../components/board/BoardItem';

const BoardList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const storedPosts = getPosts();
        setPosts(storedPosts);
    }, []);

    return (
        <div>
            <div className="ptitle">게시판 목록</div>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <div className="board-wrap">
                        <ul className="board-list">
                            <li className="board-item">
                                <BoardItem
                                    key={post.id}
                                    title={post.title}
                                    auther={post.auther}
                                    date={post.date}
                                />
                            </li>
                        </ul>
                    </div>
                ))
            ) : (
                <div className="no-data-box">게시글이 없습니다.</div>
            )}
            <Link to='/boardWrite'>글쓰기</Link>
        </div>
    );
};

export default BoardList;