import { Pagination } from 'reactstrap';
import styled from 'styled-components';

export const StyledRsPagination = styled(Pagination)`
  .active > .page-link {
    background-color: rgb(34 197 94);
    color: white;
    border: rgb(34 197 94);
  }

  .page-link {
    color: rgb(34 197 94);
  }
`;
