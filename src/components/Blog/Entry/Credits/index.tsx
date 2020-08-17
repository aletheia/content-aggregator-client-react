import React from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';

const CreditsContainer = styled.div`
  text-align: right;
  font-size: 0.8em;
  font-weight: lighter;
  font-style: italic;
  line-height: 1.2em;
`;

const CreditsLink = styled('a')`
  font-weight: normal;
`;

export const Credits = ({
  author,
  language,
}: {
  author: {name: string; url: string};
  language: string;
}) => {
  const {t} = useTranslation();
  return (
    <CreditsContainer>
      {t('by')}
      <CreditsLink href={author.url}>{author.name}</CreditsLink>
      <br />
      {t('writtenIn')}
      <CreditsLink>{t(language)}</CreditsLink>
    </CreditsContainer>
  );
};
