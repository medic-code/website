import React from 'react';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import { layoutProps } from './types';

const Layout = (props: layoutProps) => {
  const { children, header, footer } = props;

  return (
    <main>
      {header ? <Header /> : null}
      {children}
      {footer ? <Footer /> : null}
    </main>
  );
};

export default Layout;
