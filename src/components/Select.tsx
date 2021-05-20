import styled from 'styled-components'

export const Select = styled.select`
  background: papayawhip;
  color: palevioletred;
  font-size: 14px;
  padding-top:10px;
  padding-bottom:10px;
  border: none;
  margin-left: 10px;

  option {
    color: palevioletred;
    background: papayawhip;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;