import React, { useState, useEffect } from 'react';
import { useParams  } from 'react-router-dom';
import { getPostById } from '../api/localStorage';

const BoardDetail = () => {
    const { id } = useParams();
    const [ post, setPost ] = useState(null);

    useEffect(() => {
        const detailPost = getPostById(id);

        if (!id) return;
        if (detailPost) setPost(detailPost);
        else setPost(null);

        console.log(detailPost)
    }, [id]);

    if (!post) {
        return <div>게시글을 로드 중이거나, 게시글이 존재하지 않습니다.</div>;
    }

    return (
        <div>
            <h2 className="ptitle">게시글 상세</h2>
            <p>{post.title}</p>
            <div>{post.content}</div>
        </div>
    )
}

export default BoardDetail;