import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTag} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import {device} from '../../../../style/device';

const TagContainer = styled.ul`
  margin-top: 10px;
  font-weight: lighter;
  display: flex;
`;

const TagItem = styled.li`
  margin-right: 5px;
  padding: 3px;
  padding-right: 5px;
  padding-left: 5px;
  color: ${({theme}) => theme.textColor};
  border: 0.5px solid ${({theme}) => theme.accentColor};
  background-color: ${({theme}) => theme.accentColor};
  line-height: 1.5em;
  font-size: 0.8em;
  border-radius: 5px;
  align-items: center;
  font-weight: bold;

  @media ${device.iphone} {
    display: none;
    line-height: 1em;
    font-weight: bold;
    display: inline-flexbox;
  }
`;

const FAIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
  @media ${device.iphone} {
    display: none;
  }
`;

export const TagList = ({tags}: {tags: string[]}) => {
  const renderTag = (tag: string) => (
    <TagItem key={tag}>
      <FAIcon icon={faTag} />
      {tag}
    </TagItem>
  );

  return <TagContainer> {tags.map(tag => renderTag(tag))}</TagContainer>;
};
