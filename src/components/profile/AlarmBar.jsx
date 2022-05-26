import alarmIC from 'assets/icon_alarm.svg';
import bookmarkIC from 'assets/icon_bookmark.svg';
import searchIC from 'assets/icon_search.svg';
import React from 'react';
import styled from 'styled-components';

function AlarmBar() {
  return (
    <StyledRoot>
      <img src={searchIC} />
      <img src={alarmIC} />
      <img src={bookmarkIC} />
    </StyledRoot>
  );
}

export default AlarmBar;

const StyledRoot = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 1.6rem;
  gap: 1.2rem;
`;
