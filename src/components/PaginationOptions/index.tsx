import React, {useState} from 'react';

import {
  Container,
  DirectionButton,
  NextIcon,
  BackIcon,
  PageNumber,
} from './styles';

interface IHeader {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const PaginationOptions = ({page, setPage}: IHeader) => {
  return (
    <Container>
      <DirectionButton onClick={() => page > 1 && setPage(page - 1)}>
        <BackIcon />
      </DirectionButton>
      {page > 2 && (
        <DirectionButton onClick={() => setPage(page - 2)}>
          <PageNumber>{page - 2}</PageNumber>
        </DirectionButton>
      )}
      {page > 1 && (
        <DirectionButton onClick={() => setPage(page - 1)}>
          <PageNumber>{page - 1}</PageNumber>
        </DirectionButton>
      )}
      <DirectionButton style={{backgroundColor: 'var(--primary)'}}>
        <PageNumber>{page}</PageNumber>
      </DirectionButton>
      {page < 70 && (
        <DirectionButton onClick={() => setPage(page + 1)}>
          <PageNumber>{page + 1}</PageNumber>
        </DirectionButton>
      )}
      {page < 69 && (
        <DirectionButton onClick={() => setPage(page + 2)}>
          <PageNumber>{page + 2}</PageNumber>
        </DirectionButton>
      )}
      <DirectionButton onClick={() => setPage(page + 1)}>
        <NextIcon />
      </DirectionButton>
    </Container>
  );
};
