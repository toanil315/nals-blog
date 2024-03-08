import { Banner, DataView, Pagination } from '@/components';
import BlogList from './components/BlogList';
import { useGetListBlogsQuery, useGetTotalBlogsQuery } from '@/services/blog.service';
import BlogListSkeleton from './components/BlogListSkeleton';
import SortOptions from './components/SortOptions';
import { useTranslation } from 'react-i18next';
import { useRouter } from '@/hooks';
import { useEffect } from 'react';
import { DEFAULT_LIMIT } from '@/constants';

const getInitialListParams = (key: string) => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const search = urlSearchParams.get('search');
  const order = urlSearchParams.get('order');
  const page = Number(urlSearchParams.get('page'));
  const limit = Number(urlSearchParams.get('limit'));
  const params = {
    search: search || '',
    order: order || 'desc',
    page: page || 1,
    limit: limit || DEFAULT_LIMIT,
  };
  return params[key as keyof typeof params];
};

const HomeContainer = () => {
  const { t } = useTranslation();
  const { query } = useRouter();
  const {
    search = getInitialListParams('search'),
    order = getInitialListParams('order'),
    page = getInitialListParams('page'),
    limit = getInitialListParams('limit'),
  } = query;
  const { data, isLoading, isFetching, isError, error } = useGetListBlogsQuery({
    page: page as number,
    limit: limit as number,
    sortBy: 'createdAt',
    order: order as 'desc' | 'asc',
    search: search as string,
  });
  const { data: totalBlogs = 0 } = useGetTotalBlogsQuery(search as string);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [query.page, query.search]);

  return (
    <>
      <Banner />
      <div className='p-4 max-w-4xl mx-auto my-0'>
        <div className='flex items-center justify-between'>
          {query.search && (
            <h2 className='font-semibold text-2xl'>
              {t('searchFor')} "{query.search}""
            </h2>
          )}
          <SortOptions />
        </div>
        <DataView
          isLoading={isLoading || isFetching}
          isError={isError}
          error={error}
          Skeleton={<BlogListSkeleton />}
          View={<BlogList blogs={Array.isArray(data) ? data : []} />}
        />
        {totalBlogs > DEFAULT_LIMIT && (
          <div className='w-full flex justify-center'>
            <Pagination
              totalElements={totalBlogs}
              limit={DEFAULT_LIMIT}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default HomeContainer;
