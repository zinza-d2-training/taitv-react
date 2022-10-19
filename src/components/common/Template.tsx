import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
type Props = {
  children?: any;
};

const Template = (props: Props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
export { Template };
