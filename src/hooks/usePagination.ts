import { useSearchParams } from 'react-router-dom';
import { useRouter } from './useRouter';

interface UsePaginationParams {
  totalElements: number;
  limit: number;
}

export const usePagination = ({ totalElements, limit }: UsePaginationParams) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { query } = useRouter();

  const onPageChange = (page: number) => {
    searchParams.delete('page');
    searchParams.append('page', String(page));
    setSearchParams(searchParams);
  };

  return {
    currentPage: Number(query.page) || 1,
    totalPages: Math.ceil(totalElements / limit),
    onPageChange,
  };
};
