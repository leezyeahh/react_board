import React from 'react';
import { Link } from 'react-router-dom';

const BoardItem = ({ post }) => {
    return (
        <li className="board-item">
            <Link to={`/boardDetail/${post.id}`} className="btn-link">
                <span className="board-tit">{post.title}</span>
                <span className="board-date">{post.date}</span>
            </Link>
        </li>
    );
};

export default BoardItem;