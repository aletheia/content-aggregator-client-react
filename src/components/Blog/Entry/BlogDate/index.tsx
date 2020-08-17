import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendar} from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

const CalendarIcon = styled(FontAwesomeIcon)`
  margin-right: 0.8em;
`;

const CalendarStyled = styled.div`
  font-weight: bold;
  color: ${({theme}) => theme.textColor};
  background-color: transparent;
  font-size: 0.9em;
  line-height: 1em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  width: max-content;
`;

export const BlogDate = ({date}: {date: Date}) => {
  return (
    <CalendarStyled>
      <CalendarIcon icon={faCalendar} />
      {date.toLocaleDateString()}
    </CalendarStyled>
  );
};
