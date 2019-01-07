import React from 'react';
import styled from '@emotion/styled';

import styles from 'style_variables';
const TeamPictureUrl = '/media/team.png';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100vh;
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

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
`;

const TeamPictureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
`;

const TeamPicture = styled.img``;

export default () =>
  <Wrapper>
    <TextContainer>
      <FeatureHeading>
        The Team
      </FeatureHeading>
      <FeatureText>
        We are a team of engineers and friends that recognized the need for automation to succeed with Amazon PPC on a large scale.
      </FeatureText>
    </TextContainer>
    <TeamPictureContainer>
        <TeamPicture src={TeamPictureUrl}/>
    </TeamPictureContainer>

  </Wrapper>