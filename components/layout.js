import Head from 'next/head';
import { SideButton } from './sideButton';

export const Layout = ({ children, title = 'Gizem Gonca', menu, footer }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-screen grid grid-cols-layout">
        <SideButton left label="Opera Singer" />
        {children}
        <SideButton label="Voice and Piano Teacher" />
      </div>
    </>
  );
};
