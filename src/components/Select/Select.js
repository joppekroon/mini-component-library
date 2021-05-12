import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import { uniqueId } from '../../uniqueid';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const id = uniqueId();
  
  return (
    <>
      <Label htmlFor={id}>
        {label}
      </Label>
      <Wrapper>
        {displayedValue}
        <Icon className="icon" id="chevron-down" size="24" strokeWidth="2"></Icon>
        <NativeSelect id={id} value={value} onChange={onChange}>
          {children} 
        </NativeSelect>
      </Wrapper>
    </>
  );
};

const Label = styled.label`
  display: block;
  font-size: 1.25rem;
  line-height: 1.2;
  color: ${COLORS.black};
  
  & + * {
    margin-top: 8px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  
  width: max-content;
  
  font-size: 1rem;
  line-height: 1.2;
  
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  
  color: ${COLORS.gray700};
  
  &:hover {
    color: ${COLORS.black};
  };
  
  &:focus-within {
    outline: auto;
  }
  
  .icon {
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 24px;
    height: 24px;
    margin: auto;
  }
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  opacity: 0;
`;

export default Select;
