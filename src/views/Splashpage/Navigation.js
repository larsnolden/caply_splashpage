import React, {
  useLayoutEffect,
  useState,
} from 'react';
import styled from '@emotion/styled';

import styles from 'style_variables';

import ButtonPrimary from 'components/ButtonPrimary';
import ButtonTertiary from 'components/ButtonTertiary';

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: flex-end;
  background: ${props => props.showBackground ? 'rgba(256, 256, 256, 1) ' : 'rgba(256, 256, 256, 0)'} ;
  transition: background .1s linear,  box-shadow .1s linear;
  box-shadow:  ${props => props.showBackground ? '0px 3px 6px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.15) ': 'none'};
  @media screen and (max-width: 900px) {
    display: none;
  }
  `;

const ButtonContainer = styled.div`
  display: flex;
  margin: 20px 20px 20px 0;
  align-items: center;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-items: center;
    margin: 20px 0 0 0;
    width: 100%;
  }
`;

const ButtonPrimaryStyled = styled(ButtonPrimary)`
  width: ${styles.width[4]}px;
  margin-left: 91px;
  height: 40px;
  @media screen and (max-width: 900px) {
    margin:  0 0 20px 0;
  }
`;

const ButtonTertiaryStyled = styled(ButtonTertiary)`
  margin-left: 91px;
  font-size: ${styles.font_size[4]}px;
  color: ${styles.neutral_color[6]};
  @media screen and (max-width: 900px) {
    margin: 0;
  }
`;

export default () => {
  const isMobile = window.innerWidth <= 900;
  const [showBackground, setBackground] = useState(isMobile ? true : false)

  function handleScroll() {
    const threshold = 100;
    if (window.scrollY < threshold) setBackground(false);
    else setBackground(true);
  }

  useLayoutEffect(() => {
    if(!isMobile) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  });

  return (
    <Wrapper
      showBackground={showBackground}
    >
      <ButtonContainer>
        <ButtonTertiaryStyled>
          Features
        </ButtonTertiaryStyled>
        <ButtonTertiaryStyled>
          The Team
        </ButtonTertiaryStyled>
        <ButtonPrimaryStyled
          fontSize={styles.font_size[3]}
        >
          Sign Up
        </ButtonPrimaryStyled>
      </ButtonContainer>
    </Wrapper>
  )
}
  ;
