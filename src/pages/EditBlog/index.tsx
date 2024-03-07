import { ACTION_ENUM } from '@/constants';
import { AddOrEditBlogContainer } from '@/containers/AddOrEditBlogContainer';
import { useRouter } from '@/hooks';
import React from 'react';

const EditBlog = () => {
  const { query } = useRouter();

  return (
    <AddOrEditBlogContainer
      type={ACTION_ENUM.UPDATE}
      blogId={query.blogId as string | undefined}
    />
  );
};

export default EditBlog;
