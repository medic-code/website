import React from 'react';
import Header from '../components/Footer/index';
import Footer from '../components/Header/index';
import { layoutProps } from './types';

const Layout = (props: layoutProps) => {
  const { children, header, footer } = props;

  return (
    <main>
      {header ? <Header /> : null}
      {children}
      {Footer ? <Footer /> : null}
    </main>
  );
};

export default Layout;
