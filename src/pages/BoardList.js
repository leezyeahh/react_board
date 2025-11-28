import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../api/localStorage';
import styled from 'styled-components';
import Button from '../components/atoms/Button';
import NoDataBox from '../components/molecules/NoDataBox';
import BoardItem from '../components/organisms/BoardItem';

const CommBoardWrap = styled.div`
    
  .board-list {
    margin: 0;
    padding: 0;
    list-style: none;
    
    .board-item {
      position: relative;
      border-bottom: 1px solid #e5e5e5;
      padding: 24px 0;
      text-align: left;
        
      .board-tit {
        margin: 0;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
      }
      
      .board-date {
        display: inline-block;
        margin-top: 10px;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        color: #999;
        vertical-align: top;
      }
      
      .btn-link {
        z-index: 1;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
      }
    }
  }
    
`

const BoardList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const storedPosts = getPosts();
        setPosts(storedPosts);
    }, []);

    const postList = posts.map((post) => <BoardItem key={post.id} post={post}/>);

    return (
        <CommBoardWrap>
            {posts.length > 0 ? (
              <ul className="board-list">{postList}</ul>
            ) : (
                <NoDataBox>
                  <span className="no-data-desc">게시글이 없습니다.</span>
                </NoDataBox>
            )}
            <Button size='sm' color='black' to='/boardWrite'><span className="text">글쓰기</span></Button>
        </CommBoardWrap>
    );
};

export default BoardList;