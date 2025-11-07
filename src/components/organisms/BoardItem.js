import React from 'react';
import { Link } from 'react-router-dom';

const BoardItem = ({ post }) => {
    return (
        <li className="board-item">
          <p className="board-tit">{post.title}</p>
          <span className="board-date">{post.date}</span>
          <Link to={`/boardDetail/${post.id}`} className="btn-link" />
        </li>
    );
};

export default BoardItem;