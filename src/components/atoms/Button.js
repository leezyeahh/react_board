import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const CommButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  vertical-align: top;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
    
    .text {
      display: inline-block;
      text-align: center;
      vertical-align: top;
    }

    ${(props) =>
      props.size === 'sm' &&
      css`
        height: 34px;
        padding: 0 18px;
          
        .text {
          font-size: 13px;
        }
    `}

    ${(props) =>
      props.size === 'md' &&
      css`
        max-width: 80px;
        height: 50px;
        padding: 0 20px;
          
        .text {
          font-size: 13px;
        }
    `}

  ${(props) =>
    props.color === 'black' &&
    css`
      background-color: #000;
      border: 1px solid #000;
        
        .text {
          color: #fff;
        }
    `}

  ${(props) =>
    props.color === 'white' && 
    css`
      background-color: #000;
      color: #fff;
    `}

  ${(props) =>
    props.color === 'line-black' &&
    css`
      background-color: #fff;
      border: 1px solid #000;
      color: #000;
    `}
`;

const Button = ({ children, to, onClick, ...props }) => {
  // 링크 이동이면 Link
  if (to) {
    return (
      <CommButton as={Link} to={to} className={`btn-{}`} {...props}>{children}</CommButton>
    );
  }
  // 기능성이면 Button
  return (
    <CommButton onClick={onClick} {...props}>{children}</CommButton>
  );
};

export default Button;