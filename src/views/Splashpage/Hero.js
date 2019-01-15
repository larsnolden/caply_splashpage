import React from 'react';
import styled from '@emotion/styled';

import ButtonPrimary from 'components/ButtonPrimary';
import styles from 'style_variables';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-basis: 100vh;
  font-family: Roboto;
  background: linear-gradient(180deg, #B0DEFF 0%, rgba(254, 243, 207, 0.01) 100%);
  `;

const Content = styled.div`
  max-width: 768px;
  @media screen and (max-width: 900px) {
    margin: 15px 10px 15px 10px;
  }
`;

const Heading = styled.div`
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 60px;
  letter-spacing: 0.05em;
  color: #3F3F3F;
  margin-bottom: 45px;
`;

const SubHeading = styled.div`
  max-width: 640px;
  font-style: normal;
  font-weight: normal;
  line-height: 44px;
  font-size: 36px;
  letter-spacing: 0.05em;
  color: #3F3F3F;
  margin-bottom: 45px;
`;

const StyledButton = styled(ButtonPrimary)`
  width: ${styles.width[6]}px;
`;

export default () =>
  <Wrapper>
    <Content>
      <Heading>
        Automated Amazon PPC
      </Heading>
      <SubHeading>
        Climb to the top of organic ranking with fully automated Amazon PPC campaigns
      </SubHeading>
      <StyledButton>
        Sign Up
      </StyledButton>
    </Content>
  </Wrapper>
;
