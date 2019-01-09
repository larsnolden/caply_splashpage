import React from 'react';
import styled from '@emotion/styled';

const TeamPictureUrl = '/media/team.png';

const Wrapper = styled.div`
  max-width: 1920px;
  margin: 109px auto;
  @media screen and (max-width: 1300px) {
    margin-top: 36px;
  }
`;

const Container = styled.div`
  min-height: 800px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const FeatureHeading = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 36px;
  letter-spacing: 0.05em;
  color: #2E2E2E;
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

const HalfContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
  @media screen and (max-width: 1300px) {
    flex-basis: 100%
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 640px;
  @media screen and (max-width: 1300px) {
    margin-top: 36px;
  }
`;

const TeamPicture = styled.img`
  width: 100%;
  max-width: 544px;
  display: block;
  @media screen and (max-width: 1300px) {
    margin-top: 36px;
  }
`;

export default () =>
<Wrapper>
  <Container>
    <HalfContainer>
      <TextContainer>
        <FeatureHeading>
          The Team
        </FeatureHeading>
        <FeatureText>
          We are a team of engineers and friends that recognized the need for automation to succeed with Amazon PPC on a large scale.
        </FeatureText>
      </TextContainer>
    </HalfContainer>
    <HalfContainer>
        <TeamPicture src={TeamPictureUrl}/>
    </HalfContainer>
  </Container>
</Wrapper>
;
