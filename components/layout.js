import Head from 'next/head';

export const Layout = ({ children, title = 'Gizem Gonca', menu, footer }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-base w-full h-screen">
        <div>{children}</div>
      </div>
    </>
  );
};
