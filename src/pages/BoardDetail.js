import React, { useState, useEffect } from 'react';
import { useParams  } from 'react-router-dom';
import { getPostById } from '../api/localStorage';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Button from "../components/atoms/Button";
import BtnWrap from "../components/molecules/BtnWrap";
import ContBox from "../components/organisms/ContBox";

const BoardDetail = () => {
  const { id } = useParams();
  const [ post, setPost ] = useState(null);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const detailPost = getPostById(id);

    if (!id) return;
    if (detailPost) setPost(detailPost);
    else setPost(null);
  }, [id]);

  if (!post) {
    return <div>FAIL</div>;
  }

  return (
    <div>
      <ContBox>
        <div className="cont-inner">
          <h2 className="ptitle">게시글 상세</h2>
          <p>{post.title}</p>
          <div>{post.content}</div>
          <BtnWrap size='lg' align='right'>
            <Button size='sm' color='black' onClick={goBack}><span className="text">목록</span></Button>
            <Button size='sm' color='line-black' to='/boardEdit'><span className="text">편집</span></Button>
          </BtnWrap>
        </div>
      </ContBox>
    </div>
  )
}

export default BoardDetail;