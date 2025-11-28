import React from 'react';
import styled, { css } from 'styled-components';
import Button from "../atoms/Button";

const CommBtnWrap = styled.div`
  display: flex;
  column-gap: 6px;
  
  button, a {
      flex: 1;
  }
`

const BtnWrap = ({ size, gap, align, children, ...props }) => {
  return (
    <CommBtnWrap {...props}>{children}</CommBtnWrap>
  )
}
export default BtnWrap;