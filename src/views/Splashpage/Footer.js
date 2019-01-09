import React from 'react';
import styled from '@emotion/styled';

import ButtonTertiary from 'components/ButtonTertiary';

const Container = styled.div`
  display: flex;
  max-width: 1920px;
  flex-basis: 50%;
  justify-content: center;

  @media screen and (max-width: 1300px) {
    flex-basis: 100%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background: #004A80;
  display: flex;
  justify-content: flex-end;
`;

const ButtonTertiaryStyled = styled(ButtonTertiary)`
  margin-left: 36px;
  color: #EFEFEF;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex-basis: 50%;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
  }
`;

export default () =>
  <Wrapper>
    <Container>
      <ButtonContainer>
        <ButtonTertiaryStyled>
          Features
          </ButtonTertiaryStyled>
        <ButtonTertiaryStyled>
          Team
          </ButtonTertiaryStyled>
        <ButtonTertiaryStyled>
          Legal
          </ButtonTertiaryStyled>
      </ButtonContainer>
    </Container>
  </Wrapper>
  ;
