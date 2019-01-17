import React from 'react';
import styled from '@emotion/styled';

const TeamPictureUrl = '/media/team.png';

const Wrapper = styled.div`
margin- top: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-self: center;
  max-width: 900px;
  margin-top 40px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 200px;
  flex-shrink: 0;
  flex-grow: 1;
  margin: 25px 20px 25px 20px;
  @media screen and (max-width: 900px) {
    margin: 15px 10px 15px 10px;
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

const TeamPicture = styled.img`
  display: block;
  max-width: 500px;
  max-height: 500px;
  width: 100%;
  height: auto;
`;

export default () =>
<Wrapper id="theTeam">
    <Item>
        <FeatureHeading>
          The Team
        </FeatureHeading>
        <FeatureText>
          We are a team of engineers and friends that recognized the need for automation to succeed with Amazon PPC on a large scale.
        </FeatureText>
    </Item>
    <Item>
      <TeamPicture src={TeamPictureUrl}/>
    </Item>
</Wrapper>
;
