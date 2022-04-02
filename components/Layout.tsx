import React, { ReactNode, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'DAAF - portifólio' }: Props) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <header className='fixed z-10 top-0 w-full bg-primary'>
        <nav className='px-2 sm:px-4'>
          <div className='container flex flex-wrap justify-between items-center mx-auto'>
            <Image width={110} height={80} layout='fixed' src='/logo.png' />
            <button
              type='button'
              className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
              onClick={() => setMobileMenu((d) => !d)}>
              <span className='sr-only'>Open main menu</span>
              <svg
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clip-rule='evenodd'></path>
              </svg>
              <svg
                className='hidden w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clip-rule='evenodd'></path>
              </svg>
            </button>
            <div
              hidden={!mobileMenu}
              className='w-full md:block md:w-auto'
              id='mobile-menu'>
              <ul className='font-title text-2xl flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:font-medium'>
                <li>
                  <a
                    href='#portifolio'
                    className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:underline font-normal hover:font-bold md:p-0'>
                    Portifólio
                  </a>
                </li>
                <li className='Currículo'>
                  <a
                    href='#currículo'
                    className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:underline font-normal hover:font-bold md:p-0'>
                    Currículo
                  </a>
                </li>
                <li>
                  <a
                    href='#info'
                    className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:underline font-normal hover:font-bold md:p-0'>
                    +Info
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <div className='container flex flex-wrap justify-between items-center mx-auto'>
          <Image width={110} height={80} layout='fixed' src='/logo.png' />
          <div className='flex'>
            <button
              type='button'
              className='inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600'
              onClick={() => setMobileMenu((d) => !d)}>
              <span className='sr-only'>Open main menu</span>
              <svg
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clip-rule='evenodd'></path>
              </svg>
              <svg
                className='hidden w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clip-rule='evenodd'></path>
              </svg>
            </button>
          </div>
          <div
            hidden={!mobileMenu}
            className='justify-between items-center w-full md:flex md:w-auto'>
            <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:font-medium font-title text-2xl'>
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
        </div> */}
      </header>
      <main className='mt-32'>{children}</main>
      <footer
        id='info'
        className='bg-footer pb-20 pt-11 md:pt-44 w-full text-white'>
        <h2 className='text-center underline font-title text-7xl mb-5 md:mb-20'>
          Contatos
        </h2>
        <div className='flex flex-col md:flex-row gap-8 justify-between mx-2 md:mx-10'>
          <div className='flex flex-col md:flex-row items-center gap-5'>
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
          <div className='hidden md:block border self-stretch'></div>
          <div className='flex flex-col md:flex-row items-center gap-5'>
            <div className='flex flex-col text-center items-center gap-1'>
              <h3 className='underline text-4xl'>Ajuda Salvadora</h3>
              <div className='my-4'>
                <Image
                  src='/victor.jpg'
                  width={120}
                  height={120}
                  className='rounded-full'
                />
              </div>
              <p className='font-light text-xl'>Victor Furtado</p>
              <p className='font-light text-xl underline'>
                Fullstack Developer
              </p>
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
};

export default Layout;
