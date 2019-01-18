import React from 'react';
import styled from '@emotion/styled';

import styles from 'style_variables';

const OpacityContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(256,256,256,0.4);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Modal =  styled.div`
    z-index: 4;
    position: fixed;
    display: flex;
    flex-direction: column;
    flex-basis: 250px;
    background: #FCFCFC;
    align-items: center;
    border: 4px solid ${styles.primary_color[6]};
    border-radius: ${styles.border_radius}px;
    box-shadow: 0 15px 35px hsla(0, 0%, 0%, 0.2);
    max-width: 95%;
`;



export default ({ 
    children,
 }) =>
    <OpacityContainer>
            <Modal>
                    {children}
            </Modal>
    </OpacityContainer>
;