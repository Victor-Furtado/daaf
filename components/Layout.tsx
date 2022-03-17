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
    <footer id='info' className='bg-footer pb-20 pt-44 w-full text-white'>
      <h2 className='text-center underline font-title text-7xl mb-20'>
        Contatos
      </h2>
      <div className='flex gap-8 justify-between mx-2 md:mx-10'>
        <div className='flex items-center gap-5'>
          <div className='flex flex-col text-center items-center gap-1'>
            <h3 className='underline text-4xl'>Ilustradora</h3>
            <div className='my-4'>
              <Image
                src='/profile.png'
                width={120}
                height={120}
                className='rounded-full'
              />
            </div>
            <p className='font-light text-xl'>Danielle Alicia</p>
            <p className='font-light text-xl'>Alves Fernandes</p>
          </div>
          <div className='flex flex-col gap-5'>
            <div className='flex items-center gap-3'>
              <div className='text-gray-500 bg-white rounded-full p-2'>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <p className='font-light'>danielle.alicia3006@alu.ufc.br</p>
            </div>
            <a
              href='https://www.instagram.com/daniellealiciaalves/'
              className='flex items-center gap-3'>
              <div className='text-gray-500 bg-white rounded-full p-2'>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                  />
                </svg>
              </div>
              <p className='font-light'>@daniellealiciaalves</p>
            </a>
          </div>
        </div>
        <div className='border self-stretch'></div>
        <div className='flex items-center gap-5'>
          <div className='flex flex-col text-center items-center gap-1'>
            <h3 className='underline text-4xl'>Ajuda Salvadora</h3>
            <div className='my-4'>
              <Image
                src='/profile.png'
                width={120}
                height={120}
                className='rounded-full'
              />
            </div>
            <p className='font-light text-xl'>Victor Furtado</p>
            <p className='font-light text-xl underline'>Fullstack Developer</p>
          </div>
          <div className='flex flex-col gap-5'>
            <div className='flex items-center gap-3'>
              <div className='text-gray-500 bg-white rounded-full p-2'>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <p className='font-light'>victor.furtado@devpunk.page</p>
            </div>
            <a href='https://github.com/' className='flex items-center gap-3'>
              <div className='text-gray-500 bg-white rounded-full p-2'>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                  />
                </svg>
              </div>
              <p className='font-light'>Victor-Furtado</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Layout;
