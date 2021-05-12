import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { uniqueId } from '../../uniqueid';

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
    '--input-padding': '4px 0 2px 24px',
    '--input-line-thickness': '1px',
    '--input-font-size': 14,
    '--input-line-height': 16,
  },
  large: {
    '--input-padding': '8px 0 5px 36px',
    '--input-line-thickness': '2px',
    '--input-font-size': 18,
    '--input-line-height': 21,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];
  const id = uniqueId();

  if (!styles) {
    throw new Error(`Unknown size passed to IconInput: ${size}`);
  }

  return (
    <Wrapper style={styles} width={width}>
      <VisuallyHidden>
        <label for={id}>{label}</label>
      </VisuallyHidden>
      <Icon
        className="icon"
        id={icon}
        size={size === 'large' ? 24 : 16}
        strokeWidth={size === 'large' && 2}
      ></Icon>
      <NativeInput id={id} placeholder={placeholder}></NativeInput>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: ${(props) => props.width + 'px'};
  border-bottom: var(--input-line-thickness) solid ${COLORS.black};
  padding: var(--input-padding);

  color: ${COLORS.gray700};

  .icon {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;

    margin: auto;
  }

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: auto;
    outline-offset: 2px;
  }
`;

const NativeInput = styled.input`
  padding: 0;
  margin: 0;
  border: 0;

  outline: none;

  width: 100%;
  font-size: calc((var(--input-font-size) / 16) * 1rem);
  line-height: calc((var(--input-line-height) / 16) * 1rem);

  &:not(:placeholder-shown) {
    color: inherit;
    font-weight: 700;
  }

  &::placeholder {
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
