import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../api/localStorage';
import Button from '../components/atoms/Button';
import NoDataBox from '../components/molecules/NoDataBox';
import BoardItem from '../components/organisms/BoardItem';

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
                <NoDataBox>
                  <span className="no-data-desc">게시글이 없습니다.</span>
                </NoDataBox>
            )}
            <Button size='sm' color='black' to='/boardWrite'><span className="text">글쓰기</span></Button>
        </div>
    );
};

export default BoardList;