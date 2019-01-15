import React from 'react';
import styled from '@emotion/styled';

import { ReactComponent as AlwaysOnIcon } from 'icons/Clockwise.svg';
import { ReactComponent as SpeedometerIcon } from 'icons/Speedometer.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-self: center;
  max-width: 900px;
  flex-grow: 1;
  @media screen and (max-width: 900px) {
    margin-top 40px;
  }
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 200px;
  flex-shrink: 0;
  flex-grow: 1;

  @media screen and (max-width: 900px) {
    margin: 15px 10px 15px 10px;
  }
`;

const FeatureHeading = styled.div`
  flex-grow: 1;
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
  flex-grow: 1;
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
  <Wrapper id="features">
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
  </Wrapper>
;
