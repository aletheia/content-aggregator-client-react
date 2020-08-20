import React from 'react';
import {useTranslation} from 'react-i18next';

import styled from 'styled-components';
import {Title} from '../Title';

const Container = styled.div`
  margin: 50px;
  margin-left: 10%;
  margin-right: 10%;
`;

const Paragraph = styled.p`
  line-height: 1.8em;
  font-size: 1.1em;
  font-weight: lighter;
  text-align: justify;
  a {
    font-weight: bold;
  }
  strong {
    font-weight: bold;
  }
`;

const Header = styled.h2`
  font-style: italic;
  margin-bottom: 1vh;
  font-size: 1.3em;
`;

const Signature = styled.h3`
  text-align: right;
  font-style: italic;
  font-size: 1.3em;
  padding-right: 20px;
`;

export const About = () => {
  const {t} = useTranslation();
  return (
    <>
      <div>
        <Title />
        <Container>
          <Header>{t('about_title')}</Header>
          <Paragraph dangerouslySetInnerHTML={{__html: t('about_content')}} />
          <Signature>{t('about_signature')}</Signature>
        </Container>
      </div>
    </>
  );
};
