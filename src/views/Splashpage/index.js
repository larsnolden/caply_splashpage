import React from 'react';
import styled from '@emotion/styled';

import Hero  from './Hero';
import Features from './Features';
import TheTeam from './TheTeam';
import Footer from './Footer';
import Navigation from './Navigation';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default () =>
  <Wrapper>
    <Navigation />
    <Hero />
    <Features />
    <TheTeam />
    <Footer />
  </Wrapper>
;