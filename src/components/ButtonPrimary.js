import React from 'react';
import styled from '@emotion/styled';

import styles from 'style_variables';

const ButtonShell = styled.div`
  height: 60px;
  background: ${styles.primary_color[5]};
  border-radius: ${styles.border_radius}px;
  box-shadow: ${styles.box_shadow[2]}, ${styles.box_shadow[3]};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
`;

const Text = styled.div`
  font-family: ${styles.ui_font};
  font-size: ${props => props.fontSize ? props.fontSize : styles.font_size[5] }px;
  color: ${styles.neutral_color[0]};
  font-weight: bold;
`;

const ButtonPrimary = ({
  fontSize,
  ...props
}) =>
  <ButtonShell
    {...props}
  >
    <Text fontSize={fontSize}>
      {props.children}
    </Text>
  </ButtonShell>

export default ButtonPrimary;
