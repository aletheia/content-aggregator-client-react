import React from 'react';

import styled from 'styled-components';
import {device} from '../../style/device';

const TitleContainer = styled.div`
  display: block;
  text-align: center;
  margin-top: 10vh;
  margin-bottom: 10vh;
  h1 {
    background: -webkit-linear-gradient(
      ${({theme}) => theme.primaryColor},
      ${({theme}) => theme.secondaryColor}
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 3em;
    letter-spacing: 0.1em;
  }
  @media ${device.iphone} {
    position: relative;
    margin-top: 250px;
    margin-bottom: 3vh;
    h1 {
      font-size: 2.3em;
      letter-spacing: 0.1em;
    }
  }
`;

export const Title = () => {
  return (
    <TitleContainer>
      <h1>
        make everything
        <br />
        serverless
      </h1>
    </TitleContainer>
  );
};
