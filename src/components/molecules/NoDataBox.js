import React from 'react';
import styled from 'styled-components';
import IcoNoData from '../../assets/common/comm_ico_no_data.png';

const CommNoDataBox = styled.div`
  padding: 100px 0;
  text-align: center;
    
    .no-data-desc {
      display: inline-block;
      padding-top: 60px;
      background: url(${IcoNoData}) center top / 42px no-repeat;
      font-weight: 400;
      font-size: 13px;
      line-height: 19px;
      vertical-align: top;
      color: #999;
    }
`

const NoDataBox = ({ children, ...props }) => {
  return (
    <CommNoDataBox {...props}>{children}</CommNoDataBox>
  );
}

export default NoDataBox;