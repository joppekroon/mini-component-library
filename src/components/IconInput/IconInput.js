import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { uniqueId } from "../../uniqueid";

/*
 * DISCLAIMER: I do not endorse this style of input, it has accessibility issues.
 * This is just me trying to follow a course, which is excellent otherwise!
 * https://courses.joshwcomeau.com/css-for-js
 *
 * 1. The "Material Design" look with just the underline has been found to be
 * problematic. https://medium.com/google-design/the-evolution-of-material-designs-text-fields-603688b3fe03
 *
 * 2. There is no visual label. Even though the placeholder in this design has
 * enough contrast it still dissappears and thus cannot be used to relay
 * the information a label should.
 *
 * 3. On top of #2, the label and placeholder can be completely different. Thus,
 * someone using voice control trying to focus the field by the visual label
 * (the placeholder), would not be able to do so (easily).
 */

const SIZES = {
  small: {
    height: 24,
    iconSize: 16,
    fontSize: 14,
    lineThickness: 1,
  },
  large: {
    height: 36,
    iconSize: 24,
    fontSize: 18,
    lineThickness: 2,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];
  const inputId = uniqueId();

  if (!styles) {
    throw new Error(`Unknown size passed to IconInput: ${size}`);
  }

  return (
    <Wrapper>
      {/* Probably better to make hiding the label a non-default option. */}
      <VisuallyHidden><label for={inputId}>{label}</label></VisuallyHidden>
      <Icon
        className="icon"
        id={icon}
        size={styles.iconSize}
        strokeWidth={styles.lineThickness}
      ></Icon>
      <NativeInput id={inputId} placeholder={placeholder} style={{
        '--input-width': width + 'px', 
        '--input-height': styles.height / 16 + 'rem',
        '--input-font-size': styles.fontSize / 16 + 'rem',
        '--input-line-thickness': styles.lineThickness + 'px', 
      }}></NativeInput>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  position: relative;

  color: ${COLORS.gray700};

  .icon {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    
    margin: auto;
    
    /* Allowing click through to the input */
    pointer-events: none;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const NativeInput = styled.input`
  padding: 0;
  margin: 0;
  border: 0;
  
  padding-left: var(--input-height);
  border-bottom: var(--input-line-thickness) solid ${COLORS.black};

  width: var(--input-width);
  font-size: var(--input-font-size);
  height: var(--input-height);

  &:focus {
    outline-offset: 2px;
  }

  &:not(:placeholder-shown) {
    color: inherit;
    font-weight: 700;
  }

  &::placeholder {
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
