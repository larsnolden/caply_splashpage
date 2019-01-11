import React, { useLayoutEffect } from 'react';
import styled from '@emotion/styled';

import styles from 'style_variables';

import ButtonPrimary from 'components/ButtonPrimary';
import ButtonTertiary from 'components/ButtonTertiary';

const Wrapper = styled.div`
  justify-content: flex-end;
  max-width: 1920px;
  display: flex;
  position: fixed;
  width: 100%;
  background: ${props => props.showBackground ? '#fff' : ''};
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 20px 20px 20px 0;
  align-items: center;
`;

const ButtonPrimaryStyled = styled(ButtonPrimary)`
  width: ${styles.width[5]}px;
  margin-left: 91px;
`;

const ButtonTertiaryStyled = styled(ButtonTertiary)`
  margin-left: 91px;
  font-size: ${styles.font_size[4]}px;
  color: ${styles.neutral_color[8]};
`;


export default () => {
  //  dirty update scroll state
  // let showBackground = false;
  // useLayoutEffect(() => {
  //   // window.addEventListener('scroll', () => {
  //   //   const threshold = 100;
  //   //   if(window.scrollY >= threshold) showBackground = true;
  //   //   else showBackground = false;
  //   // });

  //   //  cleanup
  //   return () => window.removeEventListener('scroll');
  // });

  const tester = () => 'some'
  useLayoutEffect(tester);

  return (
    <Wrapper showBackground={true}>
      <ButtonContainer>
        <ButtonTertiaryStyled>
          Features
        </ButtonTertiaryStyled>
        <ButtonTertiaryStyled>
          The Team
        </ButtonTertiaryStyled>
        <ButtonPrimaryStyled>
          Sign Up
        </ButtonPrimaryStyled>
      </ButtonContainer>
    </Wrapper>
  )
}
;
