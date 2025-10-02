import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { getPosts, savePosts as savePostsToLocal } from '../api/localStorage';

const BoardWrite = () => {
    const navigate = useNavigate();

    const [posts, setPosts] = useState({
        title: '',
        content: '',
    });

    const { title, content } = posts;

    const onChange = (e) => {
        setPosts({ ...posts, [e.target.name]: e.target.value }); // value 업데이트
    };

    const handlePosts = async () => {
        // 게시글 데이터 생성
        const newPost = {
            id: uuidv4(),
            title: title,
            content: content,
            date: new Date().toLocaleDateString(),
        }

        // 기존 목록에 새 게시글 추가
        const existPost = getPosts();
        const updatePost = [newPost, ...existPost];

        // 로컬 스토리지에 저장
        savePostsToLocal(updatePost);

        alert('게시글이 등록되었습니다.');
        navigate('/boardList');
    }

    const cancelAddPost = () => {
        navigate('/boardList');
    }

    return (
        <div>
            <ul className="form-list">
                <li className="form-item">
                    <p className="form-tit">제목</p>
                    <div className="form-cont">
                        <input type="text" name="title" placeholder="제목을 입력해 주세요." value={title} onChange={onChange} />
                    </div>
                </li>
                <li className="form-item">
                    <p className="form-tit">내용</p>
                    <div className="form-cont">
                        <textarea name="content" value={content} onChange={onChange}></textarea>
                    </div>
                </li>
            </ul>
            <div className="btn-wrap">
                <button className="btn-md" onClick={handlePosts}><span className="text">등록</span></button>
                <button className="btn-md" onClick={cancelAddPost}><span className="text">취소</span></button>
            </div>
        </div>
    );
};

export default BoardWrite;