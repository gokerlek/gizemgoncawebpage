import Head from 'next/head';
import { SideButton } from './sideButton';
import { useState } from 'react';

export const Layout = ({ children, title = 'Gizem Gonca', menu, footer }) => {
  const [isOpenLeft, setIsOpenLeft] = useState(true);
  const [isOpenRight, setIsOpenRight] = useState(true);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-screen grid grid-cols-layout">
        <SideButton
          left
          open={isOpenLeft}
          hide={isOpenRight}
          onClick={() => {
            setIsOpenRight(!isOpenRight);
            setIsOpenLeft(true);
          }}
        />
        {children}
        <SideButton
          open={isOpenRight}
          hide={isOpenLeft}
          onClick={() => {
            setIsOpenLeft(!isOpenLeft);
            setIsOpenRight(true);
          }}
        />
      </div>
    </>
  );
};
