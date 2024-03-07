import { SkeletonLoader } from '@/components';
import React from 'react';

const BlogDetailViewSkeleton = () => {
  return (
    <SkeletonLoader.Wrapper
      animation='wave'
      loading
    >
      <div className='max-w-4xl mx-auto my-0 pt-4 '>
        <SkeletonLoader.Primary>
          <div className='h-72 rounded-t-lg'></div>
        </SkeletonLoader.Primary>
        <div className='blog-header p-4 pb-6 bg-white shadow-md rounded-b-lg'>
          <div className='flex items-center gap-3'>
            <SkeletonLoader.Secondary>
              <div className='h-11 w-11 rounded-full' />
            </SkeletonLoader.Secondary>
            <div>
              <SkeletonLoader.Secondary>
                <div className='w-[200px] text-lg mb-2' />
              </SkeletonLoader.Secondary>
              <SkeletonLoader.Secondary>
                <div className='w-[200px] text-xs' />
              </SkeletonLoader.Secondary>
            </div>
          </div>
          <SkeletonLoader.Primary>
            <h1 className='pt-6 pb-2 text-4xl font-semibold mt-4 mb-6' />
          </SkeletonLoader.Primary>
          <div className='blog-content flex flex-col gap-2'>
            <SkeletonLoader.Secondary>
              <div className='w-full' />
            </SkeletonLoader.Secondary>
            <SkeletonLoader.Secondary>
              <div className='w-5/6' />
            </SkeletonLoader.Secondary>
            <SkeletonLoader.Secondary>
              <div className='w-4/6' />
            </SkeletonLoader.Secondary>
          </div>
        </div>
      </div>
    </SkeletonLoader.Wrapper>
  );
};

export default BlogDetailViewSkeleton;
