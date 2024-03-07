import { DataView } from '@/components';
import { useRouter } from '@/hooks';
import { useGetBlogByIdQuery } from '@/services/blog.service';
import React from 'react';
import BlogDetailView from './components/BlogDetailView';
import BlogDetailViewSkeleton from './components/BlogDetailViewSkeleton';

const BlogDetailContainer = () => {
  const { query } = useRouter();
  const { data, isLoading, isError } = useGetBlogByIdQuery(query.blogId as string, {
    skip: !query.blogId,
  });

  return (
    <DataView
      isLoading={isLoading}
      isError={isError}
      Skeleton={<BlogDetailViewSkeleton />}
      View={<BlogDetailView blog={data!} />}
    />
  );
};

export default BlogDetailContainer;
