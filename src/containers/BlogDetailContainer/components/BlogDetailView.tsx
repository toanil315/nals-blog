import { Blog } from '@/interfaces';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Parser } from 'html-to-react';

interface Props {
  blog: Blog;
}

const BlogDetailView = ({ blog }: Props) => {
  const date = new Date(blog.createdAt);

  const { t } = useTranslation();

  return (
    <div className='max-w-4xl mx-auto my-0 py-4 '>
      <div className='h-72 bg-gray-400 rounded-t-lg'>
        <img
          className='h-full w-full object-cover rounded-t-lg'
          src={blog.image}
          alt='banner image'
        />
      </div>
      <div className='blog-header p-4 pb-6 bg-white shadow-md rounded-b-lg'>
        <div className='flex items-center gap-3'>
          <img
            className='h-11 w-11 rounded-full'
            src='https://cdn.sanity.io/images/m6ybrjur/production/4ffad9fa4faec1815c5cca013e432768f82119a8-540x960.jpg?rect=0,184,540,776'
            alt='author image'
          />
          <div>
            <a
              className='block text-lg font-semibold hover:text-green-500 transition-all duration-200 ease-in-out'
              href='https://github.com/toanil315'
            >
              Dang Cong Toan
            </a>
            <span className='text-sm text-gray-400'>
              {t('publishAt')} {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
            </span>
          </div>
        </div>
        <h1 className='pt-6 pb-2 text-4xl font-semibold mb-6'>{blog.title}</h1>
        <div className='blog-content text-gray-500 leading-5'>{Parser().parse(blog.body)}</div>
      </div>
    </div>
  );
};

export default BlogDetailView;
