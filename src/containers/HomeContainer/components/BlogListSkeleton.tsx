import { SkeletonLoader } from '@/components';
import React from 'react';

const BlogListSkeleton = () => {
  const renderBlogList = () => {
    return Array(3)
      .fill(1)
      .map((_, index) => {
        return (
          <div
            className='w-full'
            key={index}
          >
            <BlogItemSkeleton />
          </div>
        );
      });
  };

  return (
    <div className='py-8 flex flex-col items-center gap-6 max-w-4xl mx-auto my-0'>
      {renderBlogList()}
    </div>
  );
};

const BlogItemSkeleton = () => {
  return (
    <SkeletonLoader.Wrapper
      loading
      animation='wave'
    >
      <div className='rounded-lg w-full flex gap-4 p-4 shadow-green-100 shadow-md border border-gray-200'>
        <SkeletonLoader.Primary>
          <div className='h-72 w-80 md:h-56 md:w-60 overflow-hidden rounded-lg flex-shrink-0'></div>
        </SkeletonLoader.Primary>
        <div className='px-2 py-4 flex flex-col justify-between w-full'>
          <div className='blog-overview flex flex-col gap-2'>
            <SkeletonLoader.Primary>
              <h3 className='text-2xl'></h3>
            </SkeletonLoader.Primary>
            <SkeletonLoader.Secondary>
              <p className='leading-6' />
            </SkeletonLoader.Secondary>
            <SkeletonLoader.Secondary>
              <p className='leading-6' />
            </SkeletonLoader.Secondary>
            <SkeletonLoader.Secondary>
              <p className='leading-6' />
            </SkeletonLoader.Secondary>
          </div>
          <p className='flex items-center gap-2'>
            <SkeletonLoader.Secondary>
              <div className='h-9 w-9 rounded-full' />
            </SkeletonLoader.Secondary>
            <SkeletonLoader.Secondary>
              <div className='w-[100px]' />
            </SkeletonLoader.Secondary>
          </p>
        </div>
      </div>
    </SkeletonLoader.Wrapper>
  );
};

export default BlogListSkeleton;
