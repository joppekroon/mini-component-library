import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue, uniqueId } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const id = uniqueId();
  
  return (
    <>
      <Label htmlFor={id}>
        {label}
      </Label>
      <Wrapper>
        <NativeSelect id={id} value={value} onChange={onChange}>
          {children} 
        </NativeSelect>
        <span className="value">{displayedValue}</span>
        <Icon className="icon" id="chevron-down" size="24" strokeWidth="2"></Icon>
      </Wrapper>
    </>
  );
};

const Label = styled.label`
  display: block;
  font-size: 1.25rem;
  line-height: 1.5;
  color: ${COLORS.black};
  
  & + * {
    margin-top: 8px;
  }
`;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  
  padding: 8px 16px 9px 16px;
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
    display: inline-block;
    vertical-align: middle;
    margin-left: 24px;
    margin-top: 2px;
  }
  
  .value {
    vertical-align: middle;
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
