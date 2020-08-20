import React from 'react';

import {BlogPost} from '../../../actions';
import {BlogDate} from './BlogDate';
import {TagList} from './TagList';

import styled from 'styled-components';

import {useTranslation} from 'react-i18next';
import {Credits} from './Credits';
import {device} from '../../../style/device';

const Container = styled.li`
  margin-bottom: 50px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({theme}) => theme.borderColor};
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1.5em;
  line-height: 1.8em;
  color: ${({theme}) => theme.primaryColor};
  background: -webkit-linear-gradient(
    ${({theme}) => theme.secondaryColor},
    ${({theme}) => theme.primaryColor}
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 100%;
  @media ${device.iphone} {
    display: block;
    line-height: 1.3em;
    font-size: 1.3em;
    width: 100%;
    padding-bottom: 1em;
  }
`;

const Link = styled.a`
  a:hover {
    text-decoration: underline;
  }
`;

const Abstract = styled.p`
  font-weight: lighter;
  line-height: 1.5em;
  padding-bottom: 10px;
  strong {
    font-weight: normal;
    color: ${({theme}) => theme.primaryColor};
  }
  a {
    font-decoration: none;
    font-weight: bold;
  }
  a:hover {
    font-decoration: underline;
  }
`;

const More = styled.div`
  display: flex;
  font-weight: normal;
  color: ${({theme}) => theme.accentColor};
  padding-bottom: 10px;
`;

export const Entry = ({post}: {post: BlogPost}) => {
  const {t} = useTranslation();
  const {date, title, abstract, author, language, tags, link} = post;

  return (
    <Container>
      <BlogDate date={date} />
      <Title>
        <Link href={link} target="_new">
          {title}
        </Link>
      </Title>
      <Abstract dangerouslySetInnerHTML={{__html: abstract}} />
      <More>
        <a href={link} target="_new">
          {t('readMore')}
        </a>
      </More>
      <Credits author={author} language={language} />
      <TagList tags={tags} />
    </Container>
  );
};
