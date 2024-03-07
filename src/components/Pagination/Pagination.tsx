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
        <PaginationLink first />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous />
      </PaginationItem>
      {renderPaginationItems()}
      <PaginationItem>
        <PaginationLink next />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last />
      </PaginationItem>
    </StyledRsPagination>
  );
};

export default Pagination;
