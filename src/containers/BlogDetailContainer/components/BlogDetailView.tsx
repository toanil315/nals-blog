import { Blog } from '@/interfaces';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  blog: Blog;
}

const BlogDetailView = ({ blog }: Props) => {
  const date = new Date(blog.createdAt);

  const { t } = useTranslation();

  return (
    <div className=''>
      <div className='h-56'>
        <img
          className='h-full w-full object-cover'
          src={blog.image}
          alt='banner image'
        />
      </div>
      <h1 className='pt-6 pb-2 text-4xl font-semibold'>{blog.title}</h1>
      <div className='flex items-center'>
        <img
          className='h-11 w-11 rounded-full'
          src='https://cdn.sanity.io/images/m6ybrjur/production/4ffad9fa4faec1815c5cca013e432768f82119a8-540x960.jpg?rect=0,184,540,776'
          alt='author image'
        />
        <p className='pl-4 text-gray-500'>
          {t('postBy')} <span className='font-semibold text-green-500'>Dang Cong Toan</span> -{' '}
          {t('publishAt')} {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default BlogDetailView;
