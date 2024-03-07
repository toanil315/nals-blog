import { ACTION_ENUM } from '@/constants';
import { AddOrEditBlogContainer } from '@/containers/AddOrEditBlogContainer';
import React from 'react';

const CreateBlog = () => {
  return <AddOrEditBlogContainer type={ACTION_ENUM.CREATE} />;
};

export default CreateBlog;
