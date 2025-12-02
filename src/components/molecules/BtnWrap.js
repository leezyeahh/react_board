import React from 'react';
import styled, { css } from 'styled-components';

const CommBtnWrap = styled.div`
  display: flex;
  column-gap: 6px;
  
  [class*='btn'] {
    flex: 1;
  }

  ${(props) =>
    props.gap === 'lg' &&
    css`
      column-gap: 10px;
  `}

  ${({ $align }) =>
    css`
    [class*='btn'] {
      flex: none;
      width: auto;
    }
  `}
  ${(props) =>
    props.align === 'center' &&
    css`
    justify-content: center;
  `}
  ${(props) =>
    props.align === 'left' &&
    css`
    justify-content: flex-start;
  `}
  ${(props) =>
    props.align === 'right' &&
    css`
    justify-content: flex-end;
  `}
  
  ${(props) =>
    props.direction === 'row' &&
    css`
    flex-direction: column;
    row-gap: 6px;
  `}
  
  ${(props) =>
    props.size === 'lg' &&
    css`
    margin-top: 40px;
  `}
`;

const BtnWrap = ({ children, ...props }) => {
  return (
    <CommBtnWrap {...props}>{children}</CommBtnWrap>
  );
};
export default BtnWrap;