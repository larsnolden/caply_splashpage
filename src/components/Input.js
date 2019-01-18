import React from 'react';
import styled from '@emotion/styled';

import styles from 'style_variables';

export default styled.input`
    background: #FFFFFF;
    border: 2px solid ${styles.primary_color[5]};
    box-sizing: border-box;
    box-shadow: inset ${styles.box_shadow[2]}, inset ${styles.box_shadow[3]};
    border-radius: 3.5px;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: ${styles.font_size[4]}px;
    color: ${styles.neutral_color[7]};
    ::placeholder { 
        color: #9A9A9A;
    }
    padding: 12px;
    display: flex;
    flex-basis: 100%;
`;