import React from 'react';
import { Outlet } from 'react-router-dom';
import { DefaultLayoutContainer } from './styles';
import { Header } from '@/components';

const DefaultLayout = () => {
  return (
    <DefaultLayoutContainer>
      <Header />
      <main>
        <Outlet />
      </main>
    </DefaultLayoutContainer>
  );
};

export default DefaultLayout;
