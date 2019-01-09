import React from 'react';
import styled from '@emotion/styled';

import { ReactComponent as AlwaysOnIcon } from 'icons/Clockwise.svg';
import { ReactComponent as SpeedometerIcon } from 'icons/Speedometer.svg';

const Wrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const HalfContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
  @media screen and (max-width: 1300px) {
    flex-basis: 100%
  }
`;

const Feature = styled.div`
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  max-width: 640px;

  @media screen and (max-width: 1300px) {
    margin-top: 36px;
  }
`;

const FeatureHeading = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 36px;
  letter-spacing: 0.05em;
  color: #2E2E2E;
  margin-left: 36px;
`;

const FeatureText = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 30px;
  letter-spacing: 0.05em;
  color: #2E2E2E;
  margin-top: 14px;
`;

const HeadingIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 68px;
  align-items: center;
`;

const IconContainer = styled.div`
  height: 68px;
  width: 68px;
  display: flex;

  * {
      height: 68px;
  }
`;

export default () =>
  <Wrapper>
    <Container>
      <HalfContainer>
        <Feature>
          <HeadingIconContainer>
            <IconContainer>
              <AlwaysOnIcon />
            </IconContainer>
            <FeatureHeading>
              Optimize Constantly
            </FeatureHeading>
          </HeadingIconContainer>
          <FeatureText>
            Caply will generate new keywords and adjust your campaigns to gurantee an optimal campaign performance at any time.
          </FeatureText>
        </Feature>
      </HalfContainer>
      <HalfContainer>
        <Feature>
          <HeadingIconContainer>
            <IconContainer>
              <SpeedometerIcon />
            </IconContainer>
            <FeatureHeading>
              Outperform the competition
            </FeatureHeading>
          </HeadingIconContainer>
          <FeatureText>
            With our proprietary key word algorithm, generating and vetting new keywords constantly.
          </FeatureText>
        </Feature>
      </HalfContainer>
    </Container>
  </Wrapper>
;