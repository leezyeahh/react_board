import React from 'react';
import styled, { css } from 'styled-components';
import Button from "../atoms/Button";

const CommContBox = styled.div`
  overflow: hidden;
  
  ${(props) =>
    props.gap === '4xl' &&
    css`
    margin-top: 70px;
  `}
  ${(props) =>
    props.gap === '3xl' &&
    css`
    margin-top: 60px;
  `}
  ${(props) =>
    props.gap === '2xl' &&
    css`
    margin-top: 40px;
  `}
  ${(props) =>
    props.gap === 'xl' &&
    css`
    margin-top: 40px;
  `}
  ${(props) =>
    props.gap === 'lg' &&
    css`
    margin-top: 30px;
  `}
    
  .cont-inner {
    padding: 0 20px;
  }
`

const ContBox = ({ children, ...props }) => (
  <CommContBox {...props}>{children}</CommContBox>
);

export default ContBox;