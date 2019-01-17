import React from 'react';
import styled from '@emotion/styled';

import styles from 'style_variables';
import scrollTo from 'scrollTo';

import ButtonTertiary from 'components/ButtonTertiary';

const Wrapper = styled.div`
  background: #004A80;
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-basis: 60px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    flex-basis: 105px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 900px;
  width: 100%;
  justify-content: flex-end;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: space-around;
    padding: 10px 0 10px 0;
    align-items: center;
  }
`;

const FooterItem = styled.div`
  margin-right: 36px;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-basis: 100%;
    margin: 0;
  }
  `;

const ButtonTertiaryStyled = styled(ButtonTertiary)`
  color: #EFEFEF;
  font-size:  ${styles.font_size[3]}px;
  font-weight: normal;
`;

export default () =>
  <Wrapper>
    <Container>
      <FooterItem>
        <ButtonTertiaryStyled onClick={() => scrollTo('features')}>
          Features
            </ButtonTertiaryStyled>
      </FooterItem>
      <FooterItem>
        <ButtonTertiaryStyled onClick={() => scrollTo('theTeam')}>
          Team
            </ButtonTertiaryStyled>
      </FooterItem>
      <FooterItem>
        <ButtonTertiaryStyled>
          Legal
            </ButtonTertiaryStyled>
      </FooterItem>
    </Container>
  </Wrapper>
  ;
