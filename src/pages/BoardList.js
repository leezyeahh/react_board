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

    return (
        <div>
            <div className="ptitle">게시판 목록</div>
            <div className="board-wrap">
                <ul className="board-list">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <BoardItem
                                key={post.id}
                                title={post.title}
                                date={post.date}
                            />
                        ))
                    ) : (
                        <div className="no-data-box">게시글이 없습니다.</div> // TODO: ul 밖으로 꺼내야함
                    )}
                </ul>
            </div>
            <Link to='/boardWrite'>글쓰기</Link>
        </div>
    );
};

export default BoardList;