import { ROUTES } from '@/constants';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className=' sticky top-0 z-50 bg-white shadow-md'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-6'>
        <div className='flex items-center'>
          <Link to='/'>
            <img
              className='h-6  cursor-pointer object-contain'
              src='https://seeklogo.com/images/M/medium-logo-F0ACFCCD58-seeklogo.com.png'
              alt='logo'
            />
          </Link>
          <div className='ml-4 hidden items-center space-x-6 font-semibold md:flex lg:ml-8'>
            <h3>{t('about')}</h3>
            <h3>{t('contact')}</h3>
            <h3 className='cursor-pointer rounded-full bg-green-500 px-4 py-1 text-white'>
              {t('follow')}
            </h3>
          </div>
        </div>
        <div className='flex items-center space-x-4 font-semibold text-green-500'>
          <Link to={ROUTES.CREATE_BLOG}>
            <h3 className='cursor-pointer rounded-full border !border-green-500 px-4 py-2'>
              {t('getStarted')}
            </h3>
          </Link>
        </div>
      </div>
    </header>
  );
}
