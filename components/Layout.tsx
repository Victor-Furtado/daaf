import React, { ReactNode } from 'react';
import Head from 'next/head';
import Image from 'next/image';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'DAAF - portifólio' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header className='fixed z-50 top-0 w-full bg-primary'>
      <div className='mx-4 md:mx-10 flex justify-between items-center'>
        <Image width={110} height={80} layout='fixed' src='/logo.png' />
        <ul className='flex gap-16 font-title text-2xl'>
          <li className='hover:underline font-normal hover:font-bold'>
            <a href='#portifolio'>Portfólio</a>
          </li>
          <li className='hover:underline font-normal hover:font-bold'>
            <a href='#currículo'>Currículo</a>
          </li>
          <li className='hover:underline font-normal hover:font-bold'>
            <a href='#info'>+ Info</a>
          </li>
        </ul>
      </div>
    </header>
    <main className='mt-32'>{children}</main>
    <footer></footer>
  </div>
);

export default Layout;
