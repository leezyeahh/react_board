import React from 'react';
import {Link} from "react-router-dom";

const BoardItem = ({ title, date }) => {
    return (
        <li className="board-item">
            <Link to='/boardDetail' className="board-tit">{title}</Link>
            <p>{date}</p>
        </li>
    );
};

export default BoardItem;