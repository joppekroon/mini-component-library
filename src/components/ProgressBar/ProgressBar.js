/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const SIZES = {
  small: {
    '--pb-wrapper-height': 8,
    '--pb-radius': '4px',
  },
  medium: {
    '--pb-wrapper-height': 12,
    '--pb-radius': '4px',
  },
  large: {
    '--pb-wrapper-height': 24,
    '--pb-padding': '4px',
    '--pb-radius': '8px',
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  
  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar`);
  }

  return (
    <Wrapper
      style={styles}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <Bar value={value}/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: calc((var(--pb-wrapper-height) / 16) * 1rem);
  border-radius: var(--pb-radius);
  background-color: ${COLORS.transparentGray15};
  padding: var(--pb-padding, 0);
  
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
`;

const Bar = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  
  &::before {
    content: '';
    display: block;
    height: 100%;
    width: ${props => props.value + '%'};
    
    background-color: ${COLORS.primary};
  }
`;

export default ProgressBar;
