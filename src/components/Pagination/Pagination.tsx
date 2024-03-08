import React from 'react';
import { StyledRsPagination } from './styled';
import { PaginationItem, PaginationLink } from 'reactstrap';
import { usePagination } from '@/hooks';

interface Props {
  totalElements: number;
  limit: number;
}

const Pagination = (paginationProps: Props) => {
  const { currentPage, onPageChange, totalPages } = usePagination(paginationProps);

  const renderPaginationItems = () => {
    const items = [];
    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <PaginationItem
          key={i}
          active={currentPage === i}
        >
          <PaginationLink onClick={() => onPageChange(i)}>{i}</PaginationLink>
        </PaginationItem>,
      );
    }
    return items;
  };

  return (
    <StyledRsPagination>
      <PaginationItem>
        <PaginationLink
          first
          onClick={() => onPageChange(1)}
        />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          previous
          onClick={() => onPageChange(currentPage - 1)}
        />
      </PaginationItem>
      {renderPaginationItems()}
      <PaginationItem>
        <PaginationLink
          next
          onClick={() => onPageChange(currentPage + 1)}
        />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          last
          onClick={() => onPageChange(totalPages)}
        />
      </PaginationItem>
    </StyledRsPagination>
  );
};

export default Pagination;
