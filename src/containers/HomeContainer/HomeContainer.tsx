import { Banner, DataView } from '@/components';
import BlogList from './components/BlogList';
import { useGetListBlogsQuery } from '@/services/blog.service';
import BlogListSkeleton from './components/BlogListSkeleton';

const HomeContainer = () => {
  const { data, isLoading, isError } = useGetListBlogsQuery({
    page: 1,
    limit: 10,
    sortBy: 'id',
    order: 'asc',
    search: '',
  });

  return (
    <div className='bg-gray-50 '>
      <Banner />
      <div className='p-4'>
        <DataView
          isLoading={isLoading}
          isError={isError}
          Skeleton={<BlogListSkeleton />}
          View={<BlogList blogs={data || []} />}
        />
      </div>
    </div>
  );
};

export default HomeContainer;
